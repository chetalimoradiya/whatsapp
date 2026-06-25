"use client";

import EmojiPicker from "emoji-picker-react";

interface Props {

  onEmojiClick:
  (emoji:string)=>void;

}

export default function EmojiPickerBox({

onEmojiClick

}:Props){

return(

<div
className="emoji-container"
>

<EmojiPicker

onEmojiClick={(emoji)=>{

onEmojiClick(
emoji.emoji
);

}}

/>

</div>

);

}