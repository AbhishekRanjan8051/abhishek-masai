import React from "react";
import { v4 as uuid } from "uuid";
import { ListItem } from "./ListItem";

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

  const handleDelete = (id) => {

    let updatedlist = list.filter((item)=>item.id !== id);
    setList(updatedlist);
  }
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

        {list.map((item,index) => {
          return <ListItem handleDelete={handleDelete} key={item.id} {...item}></ListItem>;
        })}
      </div>
    </>
  );
}

export { List };
