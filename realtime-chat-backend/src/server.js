require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const User = require("./models/User");
const Message = require("./models/Message");

const app = express();
const server = http.createServer(app);

// DB
connectDB();

// Socket server (IMPORTANT: before io.on)
const io = new Server(server, {
  cors: { origin: "*" },
});

// Socket logic
io.on("connection", async (socket) => {
  const userId = socket.handshake.auth.userId;

  if (!userId) {
    console.log("Socket rejected: No userId");
    socket.disconnect();
    return;
  }

  console.log("User connected:", userId);

  // Mark online
  await User.findByIdAndUpdate(userId, { online: true });

  // 🔹 PRIVATE MESSAGE
  socket.on("private_message", async ({ receiverId, message }) => {
    const msg = await Message.create({
      sender: userId,
      receiver: receiverId,
      content: message,
    });

    io.to(receiverId).emit("message_received", msg);
    socket.emit("message_sent", msg);
  });

  // 🔹 CHAT HISTORY
  socket.on("get_chat_history", async ({ withUserId }) => {
    const messages = await Message.find({
      $or: [
        { sender: userId, receiver: withUserId },
        { sender: withUserId, receiver: userId },
      ],
    }).sort({ createdAt: 1 });

    socket.emit("chat_history", messages);
  });

  // 🔹 DISCONNECT
  socket.on("disconnect", async () => {
    await User.findByIdAndUpdate(userId, { online: false });
    console.log("User disconnected:", userId);
  });
});

// Test route
app.get("/", (req, res) => {
  res.send("Real-time chat backend running");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
