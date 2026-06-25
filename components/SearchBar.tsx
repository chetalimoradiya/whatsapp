interface Props {

  search: string;

  setSearch:
    React.Dispatch<
      React.SetStateAction<string>
    >;

}

export default function SearchBar({

  search,

  setSearch

}: Props) {

  return (

    <input

      className="search"

      placeholder="Search Chats"

      value={search}

      onChange={(e) =>

        setSearch(
          e.target.value
        )

      }

    />

  );

}