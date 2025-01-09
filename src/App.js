import React from "react";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";
import "./style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <header className="bg-gray-900 py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">
            TODO<span className="text-yellow-400">LIST</span>
          </h1>
          <p className="text-gray-400 italic">
            Make your Task to Complete the task
          </p>
        </div>
      </header>
      <TaskForm addTask={addTask} />
      <ProgressTracker tasks={tasks} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}
