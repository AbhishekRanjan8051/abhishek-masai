import React from "react";

function TaskItem({ title, color }) {
  return (
    <div id="task-item">
      <h3 style={{ color }}>{`${title}`}</h3>
    </div>
  );
}
export { TaskItem };
