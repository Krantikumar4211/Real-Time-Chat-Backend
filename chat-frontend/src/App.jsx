import ChatWindow from "./components/ChatWindow";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div style={styles.container}>
      <UserList />
      <ChatWindow />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
  },
};
