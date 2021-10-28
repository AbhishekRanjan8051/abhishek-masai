import React from "react";

function Ref() {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);

  React.useEffect(() => {
    handleStart();
  }, []);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setCount((p) => p + 1);
    }, 400);
  };

  return (
    <div>
      <h1>hello</h1>
      <b>Timer:{count}</b>
      <br />
      <br />
      <button
        onClick={() => {
          clearInterval(countRef.current);
          countRef.current = null;
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          if (countRef.current) {
            return;
          }
          handleStart();
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setCount(0);
          clearInterval(countRef.current);
          countRef.current = null;
        }}
      >
        Reset
      </button>
    </div>
  );
}
export { Ref };
