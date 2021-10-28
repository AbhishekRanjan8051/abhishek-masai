import React from "react";
import "./css/display.css";

function Displaywatch(props) {
  return (
    <div>
      <span className="times">
        {props.time.h >= 10 ? props.time.h : "0" + props.time.h} : 
      </span>

      <span className="times">
        {props.time.m >= 10 ? props.time.m : "0" + props.time.m} : 
      </span>

      <span className="times">
        {props.time.s >= 10 ? props.time.s : "0" + props.time.s} : 
      </span>

      <span className="times">
        {props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms} 
      </span>
    </div>
  );
}
export { Displaywatch };
