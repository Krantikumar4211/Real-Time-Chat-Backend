import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: "Hello 👋", sender: "me" },
    { text: "Hi Kranti!", sender: "other" },
  ]);

  const sendMessage = (text) => {
    setMessages([...messages, { text, sender: "me" }]);
  };

  return (
    <div style={styles.chat}>
      <div style={styles.messages}>
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
}

const styles = {
  chat: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
  },
};
