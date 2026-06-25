

interface Props {

  room: string;

  selectedUser: string;
  online: boolean;
  lastSeen: string;

}

export default function Header({

  room,
  lastSeen

}: Props) {

  return (

    <div className="header">

<h2>

#{room}

</h2>

<p>

  {

          lastSeen

          ?

          `Last seen ${lastSeen}`

          :

          "🟢 Online"

        }

</p>

</div>

  );

}