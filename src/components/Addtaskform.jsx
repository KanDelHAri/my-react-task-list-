import React from "react";

export const Addtaskform = ({ addTask, valorr, newTask }) => {
  return (
    <div className="row">
      <div className="col">
        <input
          value={newTask}
          onChange={valorr}
          className="form-control form-control-lg"
        ></input>
      </div>
      <div className="col-auto">
        <button onClick={addTask} className="btn btn-lg btn-success">
          Add Task
        </button>
      </div>
    </div>
  );
};
export default Addtaskform;
