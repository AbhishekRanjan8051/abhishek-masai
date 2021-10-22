import React from "react";
import { v4 as uuid } from "uuid";
import { ListItem } from "./ListItem";

function List() {
  // putting query in input tag
  const [query, setQuery] = React.useState("");

  // adding query in list format
  const [list, setList] = React.useState([]);

  // handeling add query to list
  const handledd = () => {
    const payload = {
      title: query,
      status: false,
      id: uuid(),
    };
    setList([...list, payload]);
  };

  //  handeling delete/remove in list
  const handleDelete = (id) => {
    let updatedlist = list.filter((item) => item.id !== id);
    setList(updatedlist);
  };
  return (
    <>
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
      <div>{list.length > 0 && `count is ${list.length}`}</div>
      <div>
        {list.map((item, index) => {
          return (
            <ListItem
              handleDelete={handleDelete}
              key={item.id}
              {...item}
            ></ListItem>
          );
        })}
      </div>
    </>
  );
}

export { List };
