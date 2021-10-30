import React from "react";

function Counter() {
  const [count, setCount] = React.useState(15);

  React.useEffect(() => {
    const id = setInterval(() => {
      console.log("insde interval", count);
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(id);
          return prev;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
    // cleaning up any interval

    return () => {
      console.log("cleaning up interval");
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h2>Counter</h2>
      <h4>{count}</h4>
    </div>
  );
}
export { Counter };
