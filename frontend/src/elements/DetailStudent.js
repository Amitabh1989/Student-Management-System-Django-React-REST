import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { editStudents } from '../services/StudentService';
import { handleFormData, SuccessToast } from '../services/formUtils';
import EditStudentModal from './EditStudent';
// import '../index.css'; // Import the CSS file

export default function DetailStudentModal({ student, closeModal }) {
    // const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [formData, setformData] = useState({
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email,
        course: student.course,
        id: student.id,
        registration_no: student.registration_no
    });

    const editModal = () => {
        setIsEditModalOpen(true);
    }

    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-60">
            <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed top-1/5 left-1/3 w-1/3 p-4 h-1/2 overflow-x-hidden overflow-y-auto max-h-full shadow-md rounded-lg">
                <div className="w-full h-full">
                    <div className="relative bg-white rounded-lg shadow dark-bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                            data-modal-hide="default-modal"
                            onClick={closeModal}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg-px-8">
                            <h3 className="mb-4 text-xl font-bold text-gray-900 dark-text-white">
                                Showing Student details for {student.first_name}
                            </h3>
                            <form className="space-y-6" action="#">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
                                        Student ID
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={formData.id}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
                                        Student Registration Number
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={formData.registration_no}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={formData.first_name}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        value={formData.last_name}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="course">
                                        Course
                                    </label>
                                    <input
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                </div>
                                <div class="flex w-full gap-4">
                                    <Button variant="filled" color="blue" onClick={editModal}>Edit</Button>
                                    <Button variant="filled" onClick={closeModal}>Close</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isEditModalOpen &&
                ( <EditStudentModal student={student} closeModal={closeModal} /> )
            }
            </div>
        </>
    );
}
