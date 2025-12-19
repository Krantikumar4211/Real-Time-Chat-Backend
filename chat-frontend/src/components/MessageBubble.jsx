export default function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div
      style={{
        textAlign: isMe ? "right" : "left",
        margin: "6px 0",
      }}
    >
      <span
        style={{
          padding: "8px 12px",
          borderRadius: "10px",
          background: isMe ? "#DCF8C6" : "#eee",
          display: "inline-block",
        }}
      >
        {message.text}
      </span>
    </div>
  );
}
