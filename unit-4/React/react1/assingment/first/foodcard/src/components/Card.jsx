import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardbody">
        <img alt="" src={props.img} className="cardimg"></img>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="detail">
          <h4>{props.detail}</h4>
          <h4>{props.temp}</h4>
        </div>
        <div className="bottom">
          <div className="price">
            <h2>{props.price}</h2>
            <h2>{props.originalprice}</h2>
          </div>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
}
export { Card };
