import React from 'react'

const DisplayTask = ({ task }) => {
  return (
    <div className='my-2'>
      <div className='flex items-center gap-2'>
        {
          task.completed ? (
            <input type='checkbox' className='w-5 h-5 my-1' checked />
          ) : (
            <input type='checkbox' className='w-5 h-5 my-1' />
          )
        }

        <label className='font-semibold'>{task.name}</label>
      </div>
      <div className='w-full flex gap-2 my-2'>
        <button className='bg-teal-400 hover:bg-teal-500 text-white font-medium text-base py-1 rounded w-full'>Edit</button>
        <button className='bg-orange-400 hover:bg-orange-500 text-white font-medium text-base py-1 rounded w-full'>Delete</button>
      </div>
    </div>
  )
}

export default DisplayTask