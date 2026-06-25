"use client";

import { useState } from "react";

import EmojiPickerBox
from "./EmojiPickerBox";
import { socket } from "../lib/socket";

interface Props {

  message: string;

  setMessage:
  React.Dispatch<
    React.SetStateAction<string>
  >;

  sendMessage: () => void;

  room: string;

  username: string;

}

export default function MessageInput({

message,

setMessage,

sendMessage,

room,

username

}:Props){

const [
showEmoji,
setShowEmoji
]=
useState(false);

return(

<div
className="message-input"
>

{

showEmoji &&

<EmojiPickerBox

onEmojiClick={(emoji)=>{

setMessage(

prev=>

prev + emoji

);

}}

/>

}

<button

onClick={()=>{

setShowEmoji(

!showEmoji

);

}}

>

😀

</button>

<input

placeholder="Type Message"

value={message}

onChange={(e)=>{

setMessage(
e.target.value
);

socket.emit(
"typing",
{

room,

user:
username

}
);

}}

/>

<button

onClick={sendMessage}

>

Send

</button>

</div>

);

}