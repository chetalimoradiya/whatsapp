"use client";

import { useEffect, useState } from "react";
import { socket } from "../lib/socket";
import { Message } from "../types/message";

import ChatBox from "../components/ChatBox";
import OnlineUsers from "../components/OnlineUsers";
import RoomForm from "../components/RoomForm";
import MessageInput from "../components/MessageInput";
import ScrollButton from "../components/ScrollButton";
import ThemeToggle from "../components/ThemeToggle";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../components/SearchBar";
import ReplyBox from "../components/ReplyBox";

export default function Home() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [reply, setReply] = useState("");

  const currentUser = username.trim();

  const [usersStatus, setUsersStatus] = useState<{
    onlineUsers: Record<string, boolean>;
    lastSeenUsers: Record<string, string>;
  }>({
    onlineUsers: {},
    lastSeenUsers: {},
  });

  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [dark, setDark] = useState(true);
  const [typingUser, setTypingUser] = useState("");
  const [socketId, setSocketId] = useState("");

  useEffect(() => {
    if (!socket.connected) socket.connect();

    socket.on("connect", () => {
      setSocketId(socket.id || "");
    });

    socket.on("online-users", (count: number) => {
      setOnlineUsers(count);
    });

    socket.on("receive-message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("system-message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("user-typing", (user: string) => {
      setTypingUser(user);
      setTimeout(() => setTypingUser(""), 1500);
    });

    socket.on("users-status", (data) => {
      setUsersStatus(data);
    });

    return () => {
      socket.off("connect");
      socket.off("online-users");
      socket.off("receive-message");
      socket.off("system-message");
      socket.off("user-typing");
      socket.off("users-status");
    };
  }, []);

  const joinRoom = () => {
    if (!username || !room) return;

    socket.emit("join-room", {
      room,
      user: username,
    });

    toast.success(`Joined ${room}`);
  };

  const sendMessage = () => {
    if (!message || !room) return;

    const data = {
      user: username,
      text: message,
      room,
      time: new Date().toLocaleTimeString(),
      type: "user",
      replyTo: reply,
    };

    socket.emit("send-message", data);
    toast.success("Message Sent");

    setMessage("");
    setReply("");
  };

  return (
    <div className="layout">
      <Toaster />

      {/* ✅ FIXED SIDEBAR */}
      <Sidebar
        usersStatus={usersStatus}
        username={currentUser}
      />

      <div className={dark ? "container" : "container light"}>
        <Header
          room={room}
          selectedUser={currentUser}
          online={usersStatus.onlineUsers[currentUser] || false}
          lastSeen={usersStatus.lastSeenUsers[currentUser] || ""}
        />

        <ThemeToggle dark={dark} setDark={setDark} />

        <h1>WhatsApp</h1>

        <OnlineUsers count={onlineUsers} />

        <h3>Socket ID: {socketId}</h3>

        <input
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />

        <RoomForm
          room={room}
          setRoom={setRoom}
          joinRoom={joinRoom}
        />

        <SearchBar search={search} setSearch={setSearch} />

        {reply && (
          <ReplyBox
            reply={reply}
            clearReply={() => setReply("")}
          />
        )}

        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          room={room}
          username={username}
        />

        <ChatBox
          messages={messages.filter(
            (msg) =>
              msg.text.toLowerCase().includes(search.toLowerCase()) ||
              msg.user.toLowerCase().includes(search.toLowerCase())
          )}
          currentUser={username}
          typingUser={typingUser}
          setReply={setReply}
        />

        <ScrollButton />
      </div>
    </div>
  );
}