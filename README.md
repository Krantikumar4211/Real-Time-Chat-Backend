# **Real-Time One-to-One Chat Backend**

Socket-based real-time chat backend built using Node.js, Socket.IO and MongoDB.

---

## Tech Stack
- Node.js
- Socket.IO
- MongoDB (Mongoose)
- Express

---

## **Features**
- Socket authentication using userId
- One-to-one real-time messaging
- Online / Offline user status
- Messages stored in MongoDB
- Chat history retrieval

---

## Setup Instructions

1. Clone Repository

    git clone <your-repo-url>
 
   cd realtime-chat-backend

2. Install Dependencies

   npm install

3. Environment Variables

   Create .env file:

   .env

   PORT=5000

   MONGO_URI=mongodb://127.0.0.1:27017/chatdb

4. Run Server

   npm run dev

   Server runs on http://localhost:5000

---
**Socket Authentication**

Socket connection requires userId:

io("http://localhost:5000", {

  auth: { userId: "<USER_ID>" }
  
});

---

**Socket Events**

**Client → Server**
- private_message

    {

        "receiverId": "USER_ID",
  
        "message": "Hello"

    }

- get_chat_history

    {

         "withUserId": "USER_ID"

    }

**Server → Client**

- message_received

- message_sent

- chat_history

--- 

**Online / Offline Status**

- User marked online on socket connect

- User marked offline on disconnect


**Author**

Krantikumar Dilip Patil
