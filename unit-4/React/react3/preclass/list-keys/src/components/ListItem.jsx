import React from "react";

function ListItem({ title, id, status, handleDelete }) {

    // handleing remove list item
  const handleRemove = () => {
    handleDelete(id);
  };

  // returning a null
  /*if (title === "hiddens") {
    return null;
  }*/
   // returning a list div
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
export { ListItem };
