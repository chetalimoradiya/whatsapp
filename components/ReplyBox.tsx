interface Props {

  reply: string;

  clearReply: () => void;

}

export default function ReplyBox({

  reply,

  clearReply

}: Props) {

  return (

    <div className="reply-box">

      <div>

        <small>

          Replying to

        </small>

        <p>

          {reply}

        </p>

      </div>

      <button
      onClick={clearReply}
      >

        ✕

      </button>

    </div>

  );

}