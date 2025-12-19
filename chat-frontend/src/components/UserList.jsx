export default function UserList() {
  const users = ["Kranti", "Rahul", "Amit"];

  return (
    <div style={styles.sidebar}>
      <h3>Users</h3>
      {users.map((u) => (
        <div key={u} style={styles.user}>{u}</div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "25%",
    borderRight: "1px solid #ccc",
    padding: "10px",
  },
  user: {
    padding: "8px",
    cursor: "pointer",
  },
};
