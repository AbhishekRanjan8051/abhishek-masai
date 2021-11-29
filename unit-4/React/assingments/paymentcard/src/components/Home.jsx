import React from "react";
import { Button } from "./Button";
import { Company } from "./Company";
import { Dateshow } from "./Date";
import { Device } from "./Device";
import "./home.css";
import { Payment } from "./Payment";

function Home(props) {
  return (
    <div className="main-container">
      <div className="sub-container">
        <Dateshow />
        <Button />
        <Company />
        <Payment />
        <Device title="Payment" />
      </div>
    </div>
  );
}
export { Home };
