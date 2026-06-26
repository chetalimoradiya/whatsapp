import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);
const onlineUsers: Record<string, boolean> = {};
const lastSeenUsers: Record<string, string> = {};

const io = new Server(
  server,
  {
    cors: {
      origin: "*"
    }
  }
);

io.on(
  "connection",
  (socket) => {

    console.log(
      "Connected:",
      socket.id
    );

    // Online Users

    io.emit(
      "online-users",
      io.engine.clientsCount
    );

    // Join Room

    socket.on(
  "join-room",
  ({
    room,
    user
  }) => {

    socket.join(room);

    socket.data.username =
      user;

    socket.data.room =
      room;
      

onlineUsers[user] = true;

io.emit(
  "users-status",
  {
    onlineUsers,
    lastSeenUsers
  }
);

    io.to(room).emit(
      "system-message",
      {

        user:
        "System",

        text:
        `${user} joined ${room}`,

        room,

        time:
        new Date()
        .toLocaleTimeString(),

        type:
        "system"

      }
    );

  }
);

    // Send Message

    socket.on(
      "send-message",
      (data) => {

        io.to(
          data.room
        ).emit(
          "receive-message",
          {

            ...data,

            type:
            "user"

          }
        );

      }
    );

    // Typing

    socket.on(
  "typing",
  ({
    room,
    user
  }) => {

    socket.broadcast
      .to(room)
      .emit(
        "user-typing",
        user
      );

  }
);

    // Disconnect

  socket.on(
  "disconnect",
  () => {
    if (
  socket.data.username
) {

 onlineUsers[
  socket.data.username
] = false;

lastSeenUsers[
  socket.data.username
] =
new Date()
.toLocaleString();
}

    io.emit(
      "online-users",
      io.engine.clientsCount
    );
   io.emit(
  "users-status",
  {
    onlineUsers,
    lastSeenUsers
  }
);

    if (
      socket.data.room
    ) {

      io.to(
        socket.data.room
      ).emit(
        "system-message",
        {

          user:
          "System",

          text:
          `${socket.data.username} left chat`,

          room:
          socket.data.room,

          time:
          new Date()
          .toLocaleTimeString(),

          type:
          "system"

        }
      );

    }

  }
);

  }
);
//---------localhost-----------
// server.listen(
//   3001,
//   () => {

//     console.log(
//       "Socket Server Running"
//     );  

//   }
// );


//-----------ipaddress----------
server.listen(
  3001,
  "0.0.0.0",
  () => {

    console.log(
      "Socket Server Running"
    );

  }
);


