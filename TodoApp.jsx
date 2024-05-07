import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: []
  });
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks({ ...tasks, todo: [...tasks.todo, newTask.trim()] });
      setNewTask('');
    }
  };

  const moveTask = (task, fromCategory, toCategory) => {
    const updatedFromCategory = tasks[fromCategory].filter(t => t !== task);
    const updatedToCategory = [...tasks[toCategory], task];
    setTasks({ ...tasks, [fromCategory]: updatedFromCategory, [toCategory]: updatedToCategory });
  };

  const deleteTask = (task, category) => {
    const updatedCategory = tasks[category].filter(t => t !== task);
    setTasks({ ...tasks, [category]: updatedCategory });
  };

  return (
    <div>
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleChange} placeholder="Add a new task" />
        <button type="submit">Add</button>
        <button type='reset' onClick={()=> setNewTask('')}>Reset</button>
      </form>
      <div>
        <h3>To Do</h3>
        {tasks.todo.map((task, index) => (
          <div key={index}>
            <span>{task}</span>
            <button onClick={() => moveTask(task, 'todo', 'inProgress')}>Start</button>
            <button onClick={() => deleteTask(task, 'todo')}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h3>In Progress</h3>

        {tasks.inProgress.map((task, index) => (
          <div key={index}>
            <span>{task}</span>
            <button onClick={() => moveTask(task, 'inProgress', 'done')}>Completed</button>
            <button onClick={() => moveTask(task, 'inProgress', 'todo')}>Go Back</button>
            <button onClick={() => deleteTask(task, 'inProgress')}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Done</h3>
        {tasks.done.map((task, index) => (
          <div key={index}>
            <span>{task}</span>
        
            <button onClick={() => deleteTask(task, 'done')}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
