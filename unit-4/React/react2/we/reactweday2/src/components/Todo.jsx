// import React from "react";
import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    setTodo([...todo, text]);
    setText("");
  };
  return (
    <div>
      <h1>TODO</h1>
      <div>
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="todo"
        ></input>
        <button onClick={handleAdd}>Add</button>
        {todo.map((value) => (
          <div>{value}</div>
        ))}
      </div>
    </div>
  );
}
export { Todo };
