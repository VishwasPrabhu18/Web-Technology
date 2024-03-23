import React, { useState } from 'react'

const AddTask = ({ task }) => {
    const [taskVal, setTaskVal] = useState("");

    const handleChange = (e) => {
        setTaskVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        task.name = taskVal;
        setTaskVal("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className=''>
                <input className='border-2 border-slate-500 rounded mb-2 w-full py-2 px-2' type='text' name='task' value={taskVal} onChange={handleChange}/>
                <button className='bg-lime-500 hover:bg-lime-600 w-full py-1 rounded text-white font-semibold' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTask