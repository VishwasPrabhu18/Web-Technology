import React, { useEffect, useState } from 'react'
import Student from './Student';
import EditStudent from './EditStudent';
import { toast } from 'react-toastify';

const StudentList = ({ studentData }) => {

  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [studId, setStudId] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        if (studentData.length === undefined) {
          const res = await fetch("http://localhost:8080/api/students");
          const data = await res.json();

          if (data) {
            setLoading(false);
            setStudents(data);
          }
        } else {
          const resData = [...studentData];
          setStudents(resData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchStudents();
  }, [studentData, responseData]);

  const editStudent = (e, id) => {
    e.preventDefault();
    setStudId(id);
  }

  const deleteStudent = async (e, id) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/students/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      if (res.ok) {
        setStudents((prevElem) => {
          return prevElem.filter((stud) => stud._id !== id);
        });
        toast.success("Student Deleted Successfully");
      } else {
        toast.error("Error while deleting");
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
                : students.map((stud, idx) => <Student key={idx} stud={stud} id={idx + 1} editStudent={editStudent} deleteStudent={deleteStudent} />)
            }
          </tbody>
        </table>
      </div>

      <EditStudent studId={studId} setResponseData={setResponseData} />
    </div>
  )
}

export default StudentList;