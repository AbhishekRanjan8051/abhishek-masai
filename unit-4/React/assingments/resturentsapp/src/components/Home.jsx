import React from "react";
import { Button } from "./Button";
import { List } from "./List";
import data from "./db";

function Home() {
  const [price, setPrice] = React.useState("");
  const [rate, setRated] = React.useState("");
  const [payment, setPayment] = React.useState("");
  return (
    <div>
      <Button setPrice={setPrice} setRated={setRated} setPayment={setPayment} />
      <br />
      <hr />
      <List data={data} price={price} rate={rate} payment={payment} />
    </div>
  );
}
export { Home };
