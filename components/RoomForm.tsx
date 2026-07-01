interface Props {

  room: string;

  setRoom:
    React.Dispatch<
      React.SetStateAction<string>
    >;

  joinRoom: () => void;

}

export default function RoomForm({
   
  room, 

  setRoom,

  joinRoom

}: Props) {

  return (

    <>
<div>
      <input

        placeholder="Room"

        value={room}

        onChange={(e) =>

          setRoom(
            e.target.value
           )

        }

      />

      <button
        onClick={joinRoom}
      >

        Join Room

      </button>
 </div>
    </>

  );

}


