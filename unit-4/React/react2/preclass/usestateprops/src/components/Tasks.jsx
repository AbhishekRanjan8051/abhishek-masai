import React from "react";
import "../App.css";
import { TaskItem } from "./TaskItem";

function Task() {
  const [query, setQuery] = React.useState("");
  const [task, setTask] = React.useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleAdd = () => {
    const payload = {
      title: query,
      status: false,
    };
    let newTask = [...task, payload];
    setTask(newTask);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Add Something"
        ></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {task.map((item, index) => {
          return (
            <TaskItem color={index % 2 === 0 ? "red" : "green"} {...item} />
          );
        })}
      </div>
    </div>
  );
}
export { Task };
