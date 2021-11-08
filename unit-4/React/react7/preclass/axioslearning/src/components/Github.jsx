import React from "react";
import { fetchUser } from "./fetchUser";

function Github() {
  const [query, setQuery] = React.useState("");
  const [IsLoading, setIsLoading] = React.useState(false);
  const [IsError, setIsError] = React.useState(false);
  const [Users, setUsers] = React.useState([]);
  const handleSearch = () => {
    // console.log("hello");
    setIsLoading(true);
    fetchUser(query)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally((err) => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <h1>Github</h1>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
        />
        <button disabled={IsLoading} onClick={handleSearch}>
          {IsLoading ? "loading" : "SEARCH"}
        </button>
      </div>
      <div>
        {Users.map((item) => (
          <div key={item.id}>{item.login}</div>
        ))}
      </div>
    </>
  );
}
export { Github };
