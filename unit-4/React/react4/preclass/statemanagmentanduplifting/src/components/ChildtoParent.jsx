import React from "react";

const Child = ({ value, handelIncrement, handelDecrement }) => (
  <div>
    <h3>count is :{value}</h3>;
    <div>
      <button onClick={handelIncrement}>+</button>
      <button onClick={handelDecrement}>-</button>
    </div>
  </div>
);
function ChildtoParent() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Child to Parent</h1>
      <Child value={count}></Child>
    </div>
  );
}

export { ChildtoParent };
