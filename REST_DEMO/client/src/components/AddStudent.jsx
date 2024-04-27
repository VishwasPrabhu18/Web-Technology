import React, { useState, Fragment } from 'react';
import { Transition, Dialog } from "@headlessui/react"

const AddStudent = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const saveStudent = (e) => {
    
  }

  return (
    <>
      <div className='my-6 flex justify-between'>
        <button type="button" onClick={openModal} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded text-center">Add Student</button>
        <input type="search" name="search" id="search" className='w-64 border border-blue-300 rounded-md outline-none px-3 text-gray-500' placeholder='Search Student...' />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Student
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
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
    </>
  )
}

export default AddStudent