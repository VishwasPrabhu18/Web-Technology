import React from 'react'

const Student = ({ stud, id, deleteStudent }) => {
  return (
    <tr>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-base text-gray-500'>{id}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-base text-gray-500'>{stud.name}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-base text-gray-500'>{stud.rollNo}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-base text-gray-500'>{stud.department}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-base text-gray-500'>{stud.age}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap flex justify-center gap-3'>
        <button type="button" className="px-5 py-1.5 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded text-center">Edit</button>
        <button type="button" onClick={() => deleteStudent(stud._id)} className="px-5 py-1.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded text-center">Delete</button>
      </td>
    </tr>
  )
}

export default Student;