import React from "react";

function TodoInput() {
  const [text, setText] = React.useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={handleChange}
      ></input>
      <button>Add Todo</button>
    </>
  );
}

export { TodoInput };
