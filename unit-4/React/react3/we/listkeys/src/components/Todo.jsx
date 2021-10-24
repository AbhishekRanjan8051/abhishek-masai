import React from "react";
import { TodoInput } from "./Todoinput";
import { TodoList } from "./TodoList";

function Todo() {
  const [list, setList] = React.useState([]);

  const handleAdd = (todo) => {
    setList([...list, todo]);
  };
  return (
    <div>
      <h1>Abhishek Ranjan Masai School</h1>
      <TodoInput addTodo={handleAdd}></TodoInput>
      <TodoList list={todoList}></TodoList>
    </div>
  );
}
export { Todo };
