import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { editStudents } from '../services/StudentService';
import { handleFormData } from '../services/formUtils';

export function EditStudentModal({ student }) {
    console.log("Entered the Student edit ; " + student)

    // const [showSuccessToast, setShowSuccessToast] = useState(false);

    const handleEditStudent = async (event) => {
        event.preventDefault();
        try {
            const response = await editStudents(student.id, formData);
            // toggleModal();
            // setShowSuccessToast(true);
        } catch (error) {
            console.log("Error in editStudent : ", error);
            throw error;
        }
    }

    const [formData, setFormData] = useState({
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email,
        course: student.course
    })

    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-60">
            <div id="default-modal1" tabIndex="-1" aria-hidden="true" className="fixed top-1/5 left-1/3 w-1/3 p-4 h-1/2 overflow-x-hidden overflow-y-auto max-h-full shadow-md rounded-lg">
                <div className="w-full h-full">
                    <div className="relative bg-white rounded-lg shadow dark-bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                            // data-modal-hide="default-modal1"
                            // onClick={toggleModal}
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
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark-text-white">
                                Edit Student details for {student.first_name}
                            </h3>
                            <form className="space-y-6" action="#">
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={(e) => handleFormData(e, formData, setFormData)}
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
                                        onChange={(e) => handleFormData(e, formData, setFormData)}
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
                                        onChange={(e) => handleFormData(e, formData, setFormData)}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium mb-2 text-gray-700" htmlFor="course">
                                        Course
                                    </label>
                                    <select
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={(e) => handleFormData(e, formData, setFormData)}
                                        className="w-full border border-gray-400 p-2 rounded-lg"
                                    >
                                        <option value="">Select a course</option>
                                        <option value="AI ML">AI ML</option>
                                        <option value="Maths">Maths</option>
                                        <option value="Applied AI">Applied AI</option>
                                        <option value="Stats">Stats</option>
                                    </select>
                                </div>
                                <div>
                                    <Button variant="filled" onClick={(e) => handleEditStudent(e)}>Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* {showSuccessToast && <SuccessToast msg="Student edited successfully!" />} */}
        </>
    );
}

