import React from "react";

import { Displaywatch } from "./Displaywatch";
import { Buttoncomponents } from "./Buttoncomponents";
const stopwatch = { ms: 0, s: 0, m: 0, h: 0 };

function Stopwatch() {
  const [time, setTime] = React.useState(stopwatch);
  const [interval, setinterval] = React.useState();
  const [status, setStatus] = React.useState(0);
  const start = () => {
    run();
    setStatus(1);
    setinterval(setInterval(run, 100));
  };

  var updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH });
  };
  const stop = () => {
    clearInterval(interval);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interval);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  const resume = () => {
    start();
  };
  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <div className="main">
        <div className="holder">
          <div className="stopwatch">
            <Displaywatch time={time}></Displaywatch>
            <Buttoncomponents
              status={status}
              stop={stop}
              start={start}
              reset={reset}
              resume={resume}
            ></Buttoncomponents>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stopwatch };
