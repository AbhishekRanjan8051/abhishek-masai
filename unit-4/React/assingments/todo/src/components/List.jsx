import React from "react"; 
import styled from "styled-components";

const Button = styled.button`

`

function ListItem(props) {
  return (
    <div >
      <span onClick={() => props.markComplete(props.index)}>
        {props.itemData.isComplete ? `✅ ` : ""}
        {props.itemData?.description}
      </span>

      <button onClick={() => props.deleteTask(props.index)}> ✅</button>
    </div>
  );
}
export { ListItem };
