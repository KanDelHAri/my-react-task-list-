import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
    <div>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskbg">
                  <div className={task.status ? "done" : ""}>
                    <span className="tasknumber">{index + 1}</span>
                    <span className="tasktext">{task.title}</span>
                  </div>
                  <div className="icons">
                    <span onClick={(e) => markDone(task.id)}>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
};
export default Todo;
