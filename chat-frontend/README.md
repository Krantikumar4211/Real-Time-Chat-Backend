# Real-Time One-to-One Chat Backend

Socket-based real-time chat backend built using Node.js, Socket.IO and MongoDB.

---

## Tech Stack
- Node.js
- Socket.IO
- MongoDB (Mongoose)
- Express

---

## Features
- Socket authentication using userId
- One-to-one real-time messaging
- Online / Offline user status
- Messages stored in MongoDB
- Chat history retrieval

---

## Setup Instructions

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd realtime-chat-backend
2. Install Dependencies
bash
Copy code
npm install
3. Environment Variables
Create .env file:

env
Copy code
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/chatdb
4. Run Server
bash
Copy code
npm run dev
Server runs on http://localhost:5000

Socket Authentication
Socket connection requires userId:

js
Copy code
io("http://localhost:5000", {
  auth: { userId: "<USER_ID>" }
});
Socket Events
Client → Server
private_message

json
Copy code
{
  "receiverId": "USER_ID",
  "message": "Hello"
}
get_chat_history

json
Copy code
{
  "withUserId": "USER_ID"
}
Server → Client
message_received

message_sent

chat_history

Online / Offline Status
User marked online on socket connect

User marked offline on disconnect

Notes
JWT authentication can be added easily if required

Current implementation uses userId-based socket auth as allowed

Author
Krantikumar Dilip Patil
