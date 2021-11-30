import React from "react";
import styled from "styled-components";

const Devicebutton = styled.span`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: bold;
`;
function Device(props) {
  return (
    <div>
      <Devicebutton>
        {props.title} - {props.subtitle}
      </Devicebutton>
    </div>
  );
}
export { Device };
