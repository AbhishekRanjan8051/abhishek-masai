import React from "react";
import { v4 as uuid } from "uuid";

function List() {
  const [query, setQuery] = React.useState("");
  const [list, setList] = React.useState([]);

  const handledd = () => {
    const payload = {
      title: query,
      status: false,
      id: uuid(),
    };
    setList([...list, payload]);
  };
  return (
    <>
      <div>
        <h1>List of item</h1>
        <div>
          <input
            type="text"
            placeholder="write something"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button onClick={handledd}>Add</button>
        </div>

        {list.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
}

export { List };
