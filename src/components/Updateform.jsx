import React from "react";

export const Updateform = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          ></input>
        </div>
        <div className="col-auto">
          <button
            onClick={() => updateTask(updateData.id)}
            className="btn btn-lg btn-success mr-20"
          >
            Add Task
          </button>
          <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default Updateform;
