import React, { useEffect, useState, useCallback } from 'react';
import { getStudents, API_BASE_URL } from '../services/StudentService';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from "@material-tailwind/react";
// import { AddStudentModal, EditStudentModal } from './StudentCRUD';
import AddStudentModal from './StudentCRUD';
import { EditStudentModal } from './StudentEdit';
import '../index.css'; // Import the CSS file

function Students() {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
//   const [refreshList, setRefreshList] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [closeModalTimeout, setCloseModalTimeout] = useState(null);

  useEffect(() => {
    if (!isEditModalOpen) {
        let mounted = true;

        const fetchData = async () => {
            const data = await getStudents();
            if (mounted) {
                setStudents(data);
            }
        };
        fetchData();
        return () => {
            mounted = false;
        };
    }
    //   }, [refreshList]);
    }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  useEffect(() => {
    console.log("Value of IsEditModalOpen from useEffect: ", isEditModalOpen);
    // setIsEditModalOpen(true);
  }, [isEditModalOpen]);

  const handleEditClick = (student) => {
    console.log("Value of IsEditModalOpen before : ", isEditModalOpen)
    setSelectedStudent(student);
    setIsEditModalOpen(!isEditModalOpen);
    console.log("Value of IsEditModalOpen after : ", isEditModalOpen)
  };

//   useEffect(() => {
//     if (isEditModalOpen) {
//       clearTimeout(closeModalTimeout);
//       setCloseModalTimeout(setTimeout(() => {
//         setIsEditModalOpen(false);
//       }, 100));
//     }
//   }, [isEditModalOpen]);

  const closeModal = () => {
    // clearTimeout(closeModalTimeout);
    // setIsEditModalOpen(false);
  };

  return (
    <div className="table-container">
      <Card className="h-full w-full overflow-auto">
        <table className="w-full min-w-max table-auto text-left px-15">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="textPrimary" className="font-bold leading-none opacity-70">
                  ID
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="textPrimary" className="font-bold leading-none opacity-70">
                  Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="textPrimary" className="font-bold leading-none opacity-70">
                  Email
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="textPrimary" className="font-bold leading-none opacity-70">
                  Registration No
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="textPrimary" className="font-bold leading-none opacity-70">
                  Course
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="textPrimary" className="font-bold leading-none opacity-70">
                  Actions
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="textPrimary" className="font-normal">
                    {stu.id}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="textPrimary" className="font-normal">
                    {stu.first_name} {stu.last_name} 
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="textPrimary" className="font-normal">
                    {stu.email}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="textPrimary" className="font-normal">
                    {stu.registration_no}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="textPrimary" className="font-normal">
                    {stu.course}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography as="a" href="" variant="small" color="textPrimary" className="font-medium" onClick={() => handleEditClick(stu)}>
                    Edit
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="flex w-max gap-4 p-5 float-right">
        <Button variant="filled" color="green" ripple={true} onClick={toggleModal}>
          Add Student
        </Button>
      </div>

      {/* {isModalOpen && <AddStudentModal toggleModal={toggleModal} />} */}
      {isEditModalOpen &&
        <EditStudentModal
        student={selectedStudent}
        closeModal={closeModal}
        // isOpen={isEditModalOpen}
        />
      }
    </div>
  );
}

export default Students;
