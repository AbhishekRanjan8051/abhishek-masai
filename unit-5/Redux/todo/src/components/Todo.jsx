import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodos, deleteTodos,removeTodos } from "../actions";

function Todo() {
  const [inputdata, setInputdata] = React.useState("");

  const lists = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="parent">
        <div className="child">
          <figure>
            <figcaption>Add your list here 🗒️</figcaption>
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
                  <h3>{elem.data}</h3>
                  <i
                    className="far fa-trash-alt addbuttons"
                    title="delete button"
                    onClick={() => dispatch(deleteTodos(elem.id))}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="show">
            <button className="btn effet04" data-sm-link-text="remove All" onClick={() =>dispatch(removeTodos())}>
              <span>Check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export { Todo };
