import React, { useState } from 'react'
import DisplayTask from './components/DisplayTask'
import AddTask from './components/AddTask';

const App = () => {

  const [tasks, setTasks] = useState({ name: "", isActive: true, completed: false });
  const [taskState, setTaskState] = useState("all");

  console.log(tasks);

  return (
    <div className='flex justify-center m-8 w-auto'>
      <div className="flex flex-col gap-4 border p-5 justify-center">
        <h1>Todo Matic</h1>
        <p>What needs to be done?</p>

        <AddTask task={tasks} />

        <div className='flex justify-center gap-2 px-3'>
          <button className='bg-blue-400 px-2 py-1 w-28 rounded' type='button'>All</button>
          <button className='bg-blue-400 px-2 py-1 w-28 rounded' type='button'>Active</button>
          <button className='bg-blue-400 px-2 py-1 w-28 rounded' type='button'>Completed</button>
        </div>

        <div>
          <h3>3 Tasks tremaining</h3>
          <DisplayTask />
        </div>
      </div>
    </div>
  )
}

export default App