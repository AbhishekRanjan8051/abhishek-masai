import React from "react";
import { TodoInput } from "./Todoinput";

function Todo() {
  const [list, setList] = React.useState([]);

  const handleAdd = (todo) => {
    setList([...list, todo]);
  };
  return (
    <div>
      <h1>Abhishek Ranjan Masai School</h1>
      <TodoInput addTodo={handleAdd}></TodoInput>
    </div>
  );
}
export { Todo };
