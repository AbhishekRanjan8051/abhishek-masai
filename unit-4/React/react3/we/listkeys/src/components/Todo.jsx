import React from "react";
import { TodoInput } from "./Todoinput";
import { TodoList } from "./TodoList";

function Todo({todoList}) {
  const [list, setList] = React.useState([]);

  const handleAdd = (todo) => {
    setList([...list, todo]);
  };
  return (
    <div>
      <h1>Abhishek Ranjan Masai School</h1>
      <TodoInput addTodo={handleAdd}></TodoInput>
      <TodoList list={list}></TodoList>
    </div>
  );
}
export { Todo };
