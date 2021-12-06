import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../actions/index";
import "./calc.css";

function Calc() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Increment / Decrement</h1>
      <div className="container">
        <button onClick={() => dispatch(decNumber())} className="times dec">
          -
        </button>
        <input type="text" className="num" value={myState} />
        <button onClick={() => dispatch(incNumber())} className="times inc">
          +
        </button>
      </div>
    </>
  );
}
export { Calc };
