import React from "react";

const Child = ({ value }) => <h3>count is :{value}</h3>;
function ParenttoChild() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Parent to Child</h1>
      <Child value={count}></Child>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export { ParenttoChild };
