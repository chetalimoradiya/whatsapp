interface Props {

  username: string;

}

export default function Sidebar({

  username

}: Props) {

  return (

    <div
      className="sidebar"
    >

      <h2>

        Chats

      </h2>

      <div
        className="chat-user"
      >

        <div
          className="avatar"
        >

          {

            username

              ?

              username
                .charAt(0)
                .toUpperCase()

              :

              "?"

          }

        </div>

        <div className="name">

          <h3>

            {

              username ||

              "Guest"

            }

          </h3>

          <small>

            🟢 Online

          </small>

        </div>

      </div>

    </div>

  );

}