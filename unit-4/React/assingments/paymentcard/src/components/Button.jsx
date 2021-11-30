import React from "react";

import styled from "styled-components";

const Buttons = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
`;

function Button() {
  return (
    <div>
      <Buttons>Case Study</Buttons>
    </div>
  );
}
export { Button };
