import React from "react";
import styled from "styled-components";
import { Square } from "./Square";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  background-color: #131a28;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: cursive;
`;
const Heading = styled.span`
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 50px;
 
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
`;

function Tictoetic() {
  return (
    <Container>
      <Heading>Tic Toe Tic</Heading>
      <Row>
        <Square/>
        <Square/>
        <Square/>
      </Row>
      <Row>
        <Square/>
        <Square/>
        <Square/>
      </Row>
      <Row>
        <Square/>
        <Square/>
        <Square/>
      </Row>
      
    </Container>
  );
}
export { Tictoetic };
