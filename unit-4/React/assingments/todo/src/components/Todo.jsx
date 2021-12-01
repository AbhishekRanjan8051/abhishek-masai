import React from "react";
import styled from "styled-components";

// import trash from "./trash.svg";
import { ListItem } from "./List";

const Container = styled.div`
  background-image: url(https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 400px;
  margin: auto;
  border-radius: 10%;
  box-shadow: 5px 5px 15px 5px rgba(10, 250, 200, 10);
`;

function Todo() {
  const [taskInput, updateTaskInput] = React.useState("");
  const [toDoList, updateToDOList] = React.useState([]);

  const inputKeyDown = (event) => {
    if (event.keyCode === 13) addNote();
  };
  const getTaskObject = (description, isComplete) => {
    return {
      description,
      isComplete,
    };
  };

  const addNote = () => {
    if (!taskInput || !taskInput.length) return;
    toDoList.push(getTaskObject(taskInput, false));
    updateToDOList(toDoList);
    updateTaskInput("");
  };

  const deleteTask = (index) => {
    let splice = toDoList.filter((item, i) => i !== index);
    updateToDOList(splice);
  };

  const markComplete = (index) => {
    const list = [...toDoList];
    list[index].isComplete = !list[index].isComplete;
    updateToDOList(list);
  };

  return (
    <Container>
      <p>
        To Do List
        <span role="img" aria-label="react">
          📑
        </span>
      </p>
      <div>
        <div>
          <input
            value={taskInput}
            onKeyDown={inputKeyDown}
            onChange={(event) => updateTaskInput(event.target.value)}
          />
          <button onClick={addNote}>ADD</button>
        </div>
        {toDoList?.length ? (
          toDoList.map((toDoObject, index) => (
            <ListItem
              key={index}
              itemData={toDoObject}
              markComplete={markComplete}
              index={index}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p>
            <span role="img" aria-label="react">
              📌
            </span>
            No Task Added !
          </p>
        )}
      </div>
    </Container>
  );
}

export { Todo };
