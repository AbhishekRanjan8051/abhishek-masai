import React from "react";

function ListItem({ title, id, status, handleDelete }) {
  const handleRemove = () => {
    handleDelete(id);
  };
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
export { ListItem };
