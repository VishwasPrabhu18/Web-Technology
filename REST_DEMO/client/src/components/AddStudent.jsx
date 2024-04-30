import React, { useState, Fragment, useEffect } from 'react';
import { Transition, Dialog } from "@headlessui/react"
import StudentList from './StudentList';

const AddStudent = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState({ name: "", rollNo: "", department: "", age: "" });
  const [responseData, setResponseData] = useState({ name: "", rollNo: "", department: "", age: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setStudent({ name: "", rollNo: "", department: "", age: "" });
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  const saveStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/students/add", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });

      if (res.ok) {
        console.log("Data added Successfully");
        setResponseData(student)
        closeModal();
      } else {
        console.log("Enter all fields data...");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeSearch = async (e) => {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const result = await fetch(`http://localhost:8080/api/students/search/${searchQuery}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });

        if (result.ok) {
          const data = await result.json();
          setResponseData(data);
        } else {
          alert("Student Data not found..");
          setSearchQuery("");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (searchQuery.length >= 1) {
      fetchSearchData();
    }
    if (searchQuery.length === 0) {
      setResponseData({ name: "", rollNo: "", department: "", age: "" });
    }
  }, [searchQuery]);

  return (
    <>
      <div className='my-6 flex justify-between'>
        <button type="button" onClick={openModal} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded text-center">Add Student</button>
        <input type="search" name="search" onChange={handleChangeSearch} value={searchQuery} id="search" className='w-64 border border-blue-300 rounded-md outline-none px-3 text-gray-500' placeholder='Search by Student Name' />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-auto max-w-md transform overflow-hidden rounded-2xl bg-white py-6 px-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Student
                  </Dialog.Title>
                  <div className="mt-4 flex flex-col gap-4">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" value={student.name} onChange={handleChange} className='w-full border border-blue-300 rounded-md outline-none px-3 h-10 my-1 text-gray-500' />
                    </div>
                    <div>
                      <label htmlFor="name">Roll No</label>
                      <input type="text" name="rollNo" value={student.rollNo} onChange={handleChange} className='w-full border border-blue-300 rounded-md outline-none px-3 h-10 my-1 text-gray-500' />
                    </div>
                    <div>
                      <label htmlFor="name">Department</label>
                      <input type="text" name="department" value={student.department} onChange={handleChange} className='w-full border border-blue-300 rounded-md outline-none px-3 h-10 my-1 text-gray-500' />
                    </div>
                    <div>
                      <label htmlFor="name">Age</label>
                      <input type="text" name="age" value={student.age} onChange={handleChange} className='w-full border border-blue-300 rounded-md outline-none px-3 h-10 my-1 text-gray-500' />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-normal gap-4">
                    <button type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white hover:bg-green-500"
                      onClick={saveStudent}
                    >
                      Save
                    </button>
                    <button type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-slate-400 px-4 py-2 text-sm font-medium text-white hover:bg-slate-500"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <StudentList studentData={responseData} />
    </>
  )
}

export default AddStudent