
"use client";

import {
  useEffect,
  useRef
}
from "react";

import { Message }
from "../types/message";

import MessageBubble
from "./MessageBubble";

interface Props {

  messages: Message[];

  currentUser: string;

  typingUser: string;

  setReply:
  React.Dispatch<
    React.SetStateAction<string>
  >;

}

export default function ChatBox({

  messages,

  currentUser,

  typingUser,

  setReply

}: Props) {

  const bottomRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {

    bottomRef.current?.
      scrollIntoView({

        behavior:
          "smooth"

      });

  }, [

    messages,

    typingUser

  ]);

  return (

    <div
      className="chat-box"
    >

      {

        messages.map(

          (
            msg,
            index
          ) => (

            <MessageBubble

              key={index}

              message={msg}

              currentUser={currentUser}

              setReply={setReply}

            />

          )

        )

      }

      {

        typingUser &&

        <div
          className="typing-message"
        >

          {typingUser}
          {" "}
          is typing...

        </div>

      }

      <div
        ref={bottomRef}
      />

    </div>

  );

}