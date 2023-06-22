import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Addtaskform from "./components/Addtaskform.jsx";
import Todo from "./components/Todo.jsx";
import Updateform from "./components/Updateform.jsx";

import "./App.css";
import { useEffect } from "react";

function App() {
  // estado de la lista de tareas
  const [toDo, setToDo] = useState([{ id: 1, title: "Task 1", status: false }]);
  // estados de nueva tarea y tarea editada
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  // funciones de nuestra app

  const addTask = () => {
    if (newTask) {
      let tasks = [...toDo];
      let num = tasks.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      let taskess = [...tasks, newEntry];
      setToDo(taskess);

      localStorage.setItem("taskess", JSON.stringify(taskess));
      console.log(taskess);
    }
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
    localStorage.setItem("taskess", JSON.stringify(newTask));
    console.log(newTask);
  };

  const deleteTask = (id) => {
    let newList = toDo.filter((task) => task.id !== id);
    let neww = [...newList];
    setToDo(neww);
    localStorage.setItem("taskess", JSON.stringify(neww));
    console.log(neww);
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
    localStorage.setItem("taskess", JSON.stringify(newEntry));
    console.log(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");

    localStorage.setItem("taskess", JSON.stringify(updateObject));
    console.log(updateObject);
  };

  useEffect(() => {
    const localdata = localStorage.getItem("taskess");
    const datadata = JSON.parse(localdata);
    setToDo(datadata);
  }, []);

  return (
    <div className="container app">
      <h1>Next Day </h1>
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

      {toDo.length ? "" : "No tasks..."}
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
