import React, { useState } from 'react'
import DisplayTask from './components/DisplayTask'
import AddTask from './components/AddTask';

const App = () => {

  const [tasks, setTasks] = useState({ name: "", isActive: true, completed: false });
  const [taskState, setTaskState] = useState("all");

  console.log(tasks);

  return (
    <div className=''>
      <h1>Todo Matic</h1>
      <p>What needs to be done?</p>

      <AddTask task={tasks} />

      <div>
        <button type='button'>All</button>
        <button type='button'>Active</button>
        <button type='button'>Completed</button>
      </div>

      <div>
        <h3>3 Tasks tremaining</h3>
        <DisplayTask />
      </div>
    </div>
  )
}

export default App