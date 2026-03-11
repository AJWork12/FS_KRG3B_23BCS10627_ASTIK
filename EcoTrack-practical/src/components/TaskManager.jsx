import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
export function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const {values,handleChange,resetForm}=useForm({title: "",priority: "Low"});
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks,{...values,id: Date.now()}]);
    resetForm();
  };
  return (
    <div>
      <h2>Task Manager</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={values.title} onChange={handleChange} placeholder="Task title"/>
        <select name="priority" value={values.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} | {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}