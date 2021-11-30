import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin: auto;
  justify-content: center;
`;
const Buttons = styled.button`
  font-size: 15px;
`;
const styles = {
  margin: "auto",
};
function Button({ setPrice, setRated, setPayment }) {
  return (
    <div style={styles}>
      <Container>
        Sort by Price :-
        <Buttons
          onClick={() => {
            setPrice("LtH");
          }}
        >
          Low to High
        </Buttons>
        <Buttons
          onClick={() => {
            setPrice("HtL");
          }}
        >
          High to Low
        </Buttons>
      </Container>
      <br />

      <Container>
        Filter by Rate :-
        <Buttons
          onClick={() => {
            setRated(1);
          }}
        >
          1
        </Buttons>
        <Buttons
          onClick={() => {
            setRated(2);
          }}
        >
          2
        </Buttons>
        <Buttons
          onClick={() => {
            setRated(3);
          }}
        >
          3
        </Buttons>
        <Buttons
          onClick={() => {
            setRated(4);
          }}
        >
          4
        </Buttons>
        <Buttons
          onClick={() => {
            setRated(5);
          }}
        >
          5
        </Buttons>
      </Container>
      <br />
      <Container>
        Filter by Payment :-
        <Buttons
          onClick={() => {
            setPayment("cash");
          }}
        >
          Cash
        </Buttons>
        <Buttons
          onClick={() => {
            setPayment("online");
          }}
        >
          Online
        </Buttons>
        <Buttons
          onClick={() => {
            setPayment("both");
          }}
        >
          Both
        </Buttons>
      </Container>
    </div>
  );
}
export { Button };
