// import React from "react";

function TodoList({ list }) {
  return (
    <div>
      {list.map((e, id) => (
        <p key={id}>
          {e.title} - {e.status ? "Done" : "Not Done"}
        </p>
      ))}
    </div>
  );
}

export { TodoList };
