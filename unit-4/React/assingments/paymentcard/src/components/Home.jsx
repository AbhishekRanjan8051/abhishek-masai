import React from "react";
import { Button } from "./Button";
import { Company } from "./Company";
import { Dateshow } from "./Date";
import { Device } from "./Device";
import "./home.css";
import { Payment } from "./Payment";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  height: 500px;
  background-color: #fea500;
  margin: auto;
`;
const Containers = styled.div`
  width: 70%;
  height: 500px;
  background-color: #f5f5f5;
  margin: auto;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin: 0 0 0 10em;
`;

function Home(props) {
  return (
    <Container>
      <SubContainer>
        <Dateshow />
        <Button />
        <Company name="Amazon" />
        <Payment pay="pay" />
        <Device title="desktop" subtitle="Android" />
      </SubContainer>
    </Container>
  );
}
export { Home };

function Homes(props) {
  return (
    <Containers>
      <SubContainer>
        <Dateshow />
        <Button />
        <Company name="Apple" />
        <Payment pay="payment" />
        <Device title="macOS" subtitle="mobile" />
      </SubContainer>
    </Containers>
  );
}
export { Homes };
