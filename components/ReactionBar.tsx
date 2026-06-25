"use client";

import { useState } from "react";

export default function ReactionBar() {

  const [
    reaction,
    setReaction
  ] = useState("");

  return (

    <div
      className="reaction-bar"
    >

      <span
        onClick={() =>
          setReaction("❤️")
        }
      >
        ❤️
      </span>

      <span
        onClick={() =>
          setReaction("😂")
        }
      >
        😂
      </span>

      <span
        onClick={() =>
          setReaction("👍")
        }
      >
        👍
      </span>

      <span
        onClick={() =>
          setReaction("🔥")
        }
      >
        🔥
      </span>

      {

        reaction &&

        <div
          className="selected-reaction"
        >

          {reaction}

        </div>

      }

    </div>

  );

}