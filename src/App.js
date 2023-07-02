import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Addtaskform from "./components/Addtaskform.jsx";
import Todo from "./components/Todo.jsx";
import Updateform from "./components/Updateform.jsx";

import "./App.css";
import { useTask } from "../../my-react-task-list-/src/components/hooks/useTask.js";

function App() {
  // funciones de nuestra app
  const {
    toDo,
    newTask,
    updateData,
    updateTask,
    changeTask,
    cancelUpdate,
    deleteTask,
    markDone,
    addTask,
    valorr,
    esto,
  } = useTask();

  return (
    <div className="container app">
      <h1>Todo list ap react </h1>
      <br />

      {/* update task */}
      {updateData && updateData ? (
        <Updateform
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Addtaskform addTask={addTask} valorr={valorr} newTask={newTask} />
      )}

      {toDo.length ? "" : "No tasks..."}
      <Todo
        toDo={toDo}
        markDone={markDone}
        esto={esto}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
