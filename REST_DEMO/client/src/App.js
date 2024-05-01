import React from 'react'
import { AddStudent } from './components/index'

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='container mx-auto  my-8 sm:px-56 px-0'>
      <h1 className='text-center font-bold text-4xl text-blue-800 whitespace-nowrap py-2'>Student Management System</h1>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}>
      </ToastContainer>

      <AddStudent />
    </div>
  )
}

export default App