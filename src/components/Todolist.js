import React from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

import "./todolist.css";

function Todolist({ data, remove, click }) {
  return (
    <div className="todo">
      {data?.map((e, index) => {
        return (
          <div key={index} className="todo-item">
            <h1
              className={e.completed ? "completed" : ""}
              key={e.id}
              onClick={() => click(e.id)}
            >
              {e.name}
            </h1>
            <div className="icons">
              <RiDeleteBack2Line
                className="delete-icon"
                onClick={() => remove(e.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todolist;
