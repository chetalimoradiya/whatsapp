
interface Props {
  room: string;
  selectedUser: string;
  online: boolean;
  lastSeen: string;
}

export default function Header({
  room,
  online,
  lastSeen,
}: Props) {
  return (
    <div className="header">
      <h2>#{room}</h2>

      <p>
        {online
          ? "🟢 Online"
          : lastSeen
          ? `Last seen ${lastSeen}`
          : "🔴 Offline"}
      </p>
    </div>
  );
}

