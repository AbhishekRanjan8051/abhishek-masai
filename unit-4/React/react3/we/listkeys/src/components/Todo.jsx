import React from "react";
import { TodoInput } from "./Todoinput";
import { TodoList } from "./TodoList";

function Todo({ todoList }) {
  const [list, setList] = React.useState([]);

  const handleAdd = (todo) => {
    setList([...list, todo]);
  };
  const handleToggle = (id) => {
    const updatelist = list.map((e) => {
      if (e.id === id) {
        e.status = !e.status;
      }
      return e;
    });
    setList(updatelist);
  };
  return (
    <div>
      <h1>Abhishek Ranjan Masai School</h1>
      <TodoInput addTodo={handleAdd}></TodoInput>
      <TodoList list={list} handleToggle={handleToggle}></TodoList>
      <button
        onClick={() => {
          const updated = list.filter((e) => !e.status);
          setList(updated);
        }}
      >
        Show Not Completed
      </button>
      {/* <button onClick={() =>{
        const All = list.map((e) => e.status);
        setList(All);
      }}>Show</button> */}
    </div>
  );
}
export { Todo };
