import React from "react";
import "./css/button.css";

function Buttoncomponents(props) {
  return (
    <div className="stopwatch_button">
      {props.status === 0 ? (
        <button className="btn" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="btn3" onClick={props.stop}>
            Stop
          </button>
          <button className="btn4" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className="btn5" onClick={props.resume}>
            Resume
          </button>
          <button className="btn4" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export { Buttoncomponents };
