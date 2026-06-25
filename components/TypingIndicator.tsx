interface Props {

  user: string;

}

export default function TypingIndicator({
  user
}: Props) {

  return (

    <h3
      className="typing"
    >

       {`${user} is typing...`}

    </h3>

  );

}