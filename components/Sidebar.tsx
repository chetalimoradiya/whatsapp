interface Props {
  username: string;
  usersStatus: {
    onlineUsers: Record<string, boolean>;
    lastSeenUsers: Record<string, string>;
  };
}

export default function Sidebar({
  username,
  usersStatus,
}: Props) {
  
  const isOnline =
    usersStatus.onlineUsers[username] || false;

  const lastSeen =
    usersStatus.lastSeenUsers[username] || "";

  return (
    <div className="sidebar">
      <h2>Chats</h2>

      <div className="chat-user">
        <div className="avatar">
          {username
            ? username.charAt(0).toUpperCase()
            : "?"}
        </div>

        <div className="name">
          <h3>{username || "Guest"}</h3>

          <small>
            {isOnline
              ? "🟢 Online"
              : lastSeen                                  
                ? `Last seen ${lastSeen}`
                : "🔴Offline"}
          </small>
        </div>
      </div>
    </div>
  );
}