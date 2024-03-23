import React, { useState } from 'react'
import DisplayTask from './components/DisplayTask'
import AddTask from './components/AddTask';

const App = () => {

  const taskData = [
    // give 10 task with random realworkd good task name related to CSE, isActive and completed
    { name: "Create a new React App", isActive: true, completed: false },
    { name: "Learn React", isActive: false, completed: true },
    { name: "Learn Node.js", isActive: true, completed: false },
    { name: "Learn Express.js", isActive: false, completed: true },
    { name: "Learn MongoDB", isActive: true, completed: false },
    { name: "Learn Mongoose", isActive: false, completed: true },
    { name: "Learn Redux", isActive: true, completed: false },
    { name: "Learn React-Router", isActive: false, completed: true },
    { name: "Learn Redux-Thunk", isActive: true, completed: false },
    { name: "Learn Redux-Saga", isActive: false, completed: true }         
  ];

  const [tasks, setTasks] = useState({ name: "", isActive: true, completed: false });
  const [taskState, setTaskState] = useState("all");

  console.log(tasks);

  return (
    <div className='flex justify-center m-7 w-auto'>
      <div className="flex flex-col gap-4 border p-5 justify-center shadow-md rounded-lg">
        <div className='flex flex-col justify-center items-center gap-3'>
          <h1 className='font-semibold text-2xl'>TodoMatic</h1>
          <p className='font-medium text-sm -mb-1'>What needs to be done?</p>
        </div>

        <AddTask task={tasks} />

        <div className='flex justify-center gap-2 px-3'>
          <button className='bg-blue-400 px-2 py-1 w-28 rounded hover:bg-blue-500 text-white' type='button' onClick={() => setTaskState("all")}>All</button>
          <button className='bg-blue-400 px-2 py-1 w-28 rounded hover:bg-blue-500 text-white' type='button' onClick={() => setTaskState("active")}>Active</button>
          <button className='bg-blue-400 px-2 py-1 w-28 rounded hover:bg-blue-500 text-white' type='button' onClick={() => setTaskState("completed")}>Completed</button>
        </div>

        <div className="flex flex-col justify-center gap-2 px-3 mt-3">
          <h3 className='font-semibold text-base'>{taskData.length} Tasks tremaining</h3>
          <div className=''>
            {
              taskData.map((task, index) => {
                if(taskState === "all")
                  return <DisplayTask key={index} task={task} />
                else if (taskState === "active" && task.isActive)
                  return <DisplayTask key={index} task={task} />
                else if (taskState === "completed" && task.completed)
                  return <DisplayTask key={index} task={task} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App