import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Addtaskform from "./components/Addtaskform.jsx";
import Todo from "./components/Todo.jsx";
import Updateform from "./components/Updateform.jsx";

import "./App.css";

function App() {
  // estado de la lista de tareas
  const [toDo, setToDo] = useState([]);
  // estados de nueva tarea y tarea editada
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  // funciones de nuestra app
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newList = toDo.filter((task) => task.id !== id);
    setToDo(newList);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

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
        <Addtaskform
          addTask={addTask}
          setNewTask={setNewTask}
          newTask={newTask}
        />
      )}

      {toDo && toDo.length ? "" : "No tasks..."}
      <Todo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
