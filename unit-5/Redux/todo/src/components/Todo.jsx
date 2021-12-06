import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodos, deleteTodos, removeTodos } from "../actions";

import "./todo.css";

function Todo() {
  const [inputdata, setInputdata] = React.useState("");

  const lists = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="parent">
        <div className="child">
          <figure>
            <figcaption>Add your list here 🔥</figcaption>
          </figure>

          <div className="additem">
            <input
              type="text"
              placeholder=" 🖊️ Add items"
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            <i
              className="fa fa-plus addbuttons"
              onClick={() => dispatch(addTodos(inputdata), setInputdata(""))}
            ></i>
          </div>

          <div className="show">
            {lists.map((elem) => {
              return (
                <div className="each" key={elem.id}>
                  <h3>
                    {elem.data}
                    <i
                      className="far fa-trash-alt addbuttons"
                      title="delete button"
                      onClick={() => dispatch(deleteTodos(elem.id))}
                    ></i>
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="remove">
            <button
              className="btn effet04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeTodos())}
            >
              Check list
              {/* <span></span> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export { Todo };
