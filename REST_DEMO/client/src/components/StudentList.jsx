import React, { useEffect, useState } from 'react'
import Student from './Student';

const StudentList = ({ responseData }) => {

  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState(null);
  // const [students, setStudents] = useState(null);


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/students");
        const data = await res.json();

        if (data) {
          setLoading(false);
          setStudents(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchStudents();
  }, [students, responseData]);

  const deleteStudent = (id) => {
    fetch(`http://localhost:8080/api/students/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      if (res.ok) {
        setStudents((prevElem) => {
          return prevElem.filter((stud) => stud._id !== id);
        });
      }
    }).catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className=''>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>#</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Name</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Roll No</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Department</th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Age</th>
              <th className='text-center font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Action</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {
              loading
                ? <tr><td colSpan={6} className='text-center text-gray-500 text-lg font-semibold px-6 py-4 whitespace-nowrap'>Loading...</td></tr>
                : students.map((stud, idx) => <Student key={idx} stud={stud} id={idx + 1} deleteStudent={deleteStudent} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentList;