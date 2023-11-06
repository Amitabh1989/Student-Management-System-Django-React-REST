import React, { useState, useEffect } from 'react';
import { Button, alert } from "@material-tailwind/react";
import { deleteStudents } from '../services/StudentService';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index.css'; // Import the CSS file
import { SuccessToast } from '../services/formUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling


function DeleteStudentPage() {
    const location = useLocation();
    const student = location.state.student;
    const navigate = useNavigate();
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const onDelete = async () => {
        try {
            const response = await deleteStudents(student.id);
            setShowSuccessToast(true);
            if (response.status === 500) {
                handleCancel();
            } else if (response.status === 200) {
                handleCancel();
            }
        } catch (error) {
            console.log("Error in delete: ", error);
            throw error;
        }
    };

    useEffect(() => {
        console.log("In useEffect of the successtoast : " + showSuccessToast)
        // You can use this useEffect to reset the showSuccessToast after a delay
        if (showSuccessToast) {
            setTimeout(() => {
                setShowSuccessToast(false);
                handleCancel();
            }, 3000); // Set the timeout for 5 seconds (adjust as needed)
        }
    }, [showSuccessToast]);

    // Function to handle cancel button click
    const handleCancel = () => {
        navigate(-1);
    }

    return (
        <div className="table-container">
            <ToastContainer /> {/* Add this for toast notifications */}
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delete confirmation</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Are you sure you want to delete {student.first_name} {student.last_name}?</p>
                <div className='flex gap-4'>
                    <Button variant="filled" onClick={() => onDelete(student.id)}>Delete</Button>
                    <Button variant="filled" onClick={handleCancel}>Cancel</Button>
                </div>
            </div>
            {showSuccessToast && (
                <SuccessToast msg={"Record has been deleted!"} />
            )}
        </div>
    );
}

export default DeleteStudentPage;
