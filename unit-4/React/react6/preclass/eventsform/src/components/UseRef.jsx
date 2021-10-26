import React from "react";

function UseRef() {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const timeRef = React.useRef();
//   console.log("timeRef:", timeRef);

  React.useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  };
  const stopTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
  };
  return (
    <div>
      <h1>Use Ref</h1>
      <h1>Counter</h1>
      <h3>{time}</h3>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>PAUSE</button>
    </div>
  );
}
export { UseRef };
