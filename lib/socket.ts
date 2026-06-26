//---------localhost--------------
// import { io } from "socket.io-client";

// export const socket = io(
//   "http://localhost:3001",
//   {
//     autoConnect: false
//   }
// );

//---------------deploy------------------


// import { io } from "socket.io-client";

// export const socket = io(
//   "https://whatsapp-b0kiesa2e-chetali.vercel.app/",
//   {
//     autoConnect: false
//   }
// );


//-----ipaddress-----------
import { io } from "socket.io-client";

export const socket = io(
  "http://192.168.1.102:3001",
  {
    autoConnect: false
  }
);