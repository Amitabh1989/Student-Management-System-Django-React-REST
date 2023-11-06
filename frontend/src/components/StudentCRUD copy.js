import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { addStudents } from '../services/StudentService';

export function AddStudentModal({ isModalOpen, setModal }) {
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [formData, setformData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        course: "",
    });

    const handleModalClose = () => {
        setModal();
    }

    const handleFormData = (e) => {
        console.log("E name and value : " + e.target.name + " " + e.target.value)
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    }

    const handleAddStudent = async () => {
        console.log("Handling Course data")
        try {
            const response = await addStudents(formData);
            console.log("Response from addStudents:", response); 
            setShowSuccessToast(true);
        } catch (error) {
            console.log("Error in adding student : " + error)
            throw error
        }
    }

    useEffect(() => {
        console.log("In useEffect of the successtoast : " + showSuccessToast)
        // You can use this useEffect to reset the showSuccessToast after a delay
        if (showSuccessToast) {
            setTimeout(() => {
                setShowSuccessToast(false);
                handleModalClose();
            }, 3000); // Set the timeout for 5 seconds (adjust as needed)
        }
    }, [showSuccessToast]);

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
                            onClick={handleModalClose}
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
                                Add New Student here
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
                                        onChange={handleFormData}
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
                                        onChange={handleFormData}
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
                                        onChange={handleFormData}
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
                                        onChange={handleFormData}
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
                                    <Button variant="filled" onClick={handleAddStudent}>Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {showSuccessToast && <SuccessToast msg="Student added successfully!"/>}
        </>
    );
}


function SuccessToast( { msg }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 z-60 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="sr-only">Check icon</span>
                </div>
                <div class="ml-3 text-sm font-normal">{msg}</div>
                <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
    </div>
    )
}


export default function EditStudent ()