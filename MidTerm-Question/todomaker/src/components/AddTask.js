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
            <form onSubmit={handleSubmit}>
                <input type='text' name='task' value={taskVal} onChange={handleChange}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTask