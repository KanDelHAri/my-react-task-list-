import { useState, useEffect } from "react";

export const useTask = () => {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let tasks = [...toDo];
      let num = tasks.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      let tareas = [...tasks, newEntry];
      setToDo(tareas);
      setNewTask("")

      localStorage.setItem("tareas", JSON.stringify(tareas));
      console.log(tareas);
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
    localStorage.setItem("tareas", JSON.stringify(newTask));
    console.log(newTask);
  };

  const deleteTask = (id) => {
    let newList = toDo.filter((task) => task.id !== id);
    let neww = [...newList];
    setToDo(neww);
    localStorage.setItem("tareas", JSON.stringify(neww));
    console.log(neww);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      ...updateData,
      title: e.target.value,
    };

    setUpdateData(newEntry);
    // localStorage.setItem("tareas", JSON.stringify(newEntry));
    console.log(newEntry);
  };

  const updateTask = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, title: updateData.title };
      }
      return task;
    });
    setToDo(newTask);
    localStorage.setItem("tareas", JSON.stringify(newTask));
    console.log(newTask);
    setUpdateData("");
  };

  const esto = (task) => setUpdateData(task);

  const valorr = (e) => setNewTask(e.target.value);

  useEffect(() => {
    if (localStorage.getItem("tareas")) {
      const localdata = localStorage.getItem("tareas");
      const datadata = JSON.parse(localdata);
      setToDo(datadata);
      return;
    }

    localStorage.setItem("tareas", JSON.stringify(toDo));
  }, []);

  return {
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
  };
};
