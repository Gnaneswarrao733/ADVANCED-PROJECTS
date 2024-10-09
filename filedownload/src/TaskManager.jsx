

import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() === '') return;
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  const editTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  const updateTask = () => {
    if (taskInput.trim() === '') return;
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex ? taskInput : task
    );
    setTasks(updatedTasks);
    setTaskInput('');
    setEditIndex(null);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      updateTask();
    } else {
      addTask();
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">{editIndex !== null ? 'Update Task' : 'Add Task'}</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
