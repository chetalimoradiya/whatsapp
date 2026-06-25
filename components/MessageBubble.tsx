


import { Message } from "../types/message";
import ReactionBar from "./ReactionBar";

interface Props {

  message: Message;

  currentUser: string;

  setReply:
  React.Dispatch<
    React.SetStateAction<string>
  >;

}

export default function MessageBubble({

  message,

  currentUser,

  setReply

}: Props) {

  // System Message

  if (
    message.type ===
    "system"
  ) {

    return (

      <div
        className="system-message"
      >

        {message.text}

      </div>

    );

  }

  const ownMessage =

    message.user ===

    currentUser;

  return (

    <div

      className={

        ownMessage

          ?

          "message own"

          :

          "message"

      }

    >

      {

        message.replyTo &&

        <div
          className="reply-preview"
        >

          ↩

          {message.replyTo}

        </div>

      }

      <strong>

        {message.user}

      </strong>

      <p>

        {message.text}

      </p>

      <ReactionBar />

      <div
        className="bottom"
      >

        <small>

          {message.time}

        </small>

        {

          ownMessage &&

          <span
            className="seen"
          >

            ✓✓

          </span>

        }

      </div>

      <button

        className="reply-btn"

        onClick={() =>

          setReply(
            message.text
          )

        }

      >

        ↩ Reply

      </button>

    </div>

  );

}