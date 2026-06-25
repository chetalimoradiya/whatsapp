// import { io } from "socket.io-client";

// export const socket = io(
//   "http://localhost:3001",
//   {
//     autoConnect: false
//   }
// );


import { io } from "socket.io-client";

export const socket = io(
  "https://whatsapp-b0kiesa2e-chetali.vercel.app/",
  {
    autoConnect: false
  }
);