// Get student list
// Display in a list



import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/StudentService';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from "@material-tailwind/react";
import '../index.css'; // Import the CSS file
import AddStudentModal from '../elements/AddStudent';
import EditStudentModal from '../elements/EditStudent';
import DetailStudentModal from './DetailStudent';

function Students() {
  const [students, setStudents] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [crudButton, setCrudButton] = useState(null);

  useEffect(() => {
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
    }, [crudButton]);

    const openCrudModal = (action, stu = null) => {
        // Set stu to null if the action is "add"
        if (action === 'add') {
            stu = null;
        }
        setCrudButton(action);
        setSelectedStudent(stu)
        switch (action) {
            case 'add':
                setIsAddModalOpen(true);
                break;
            case 'edit':
                setIsEditModalOpen(true);
                break;
            case 'detail':
                setIsDetailModalOpen(true);
                break;
            case 'delete':
                setIsDeleteModalOpen(true);
                break;
            default:
                break;
        }
    }

    const closeModal = () => {
        setCrudButton(null);
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setIsDetailModalOpen(false);
        setIsDeleteModalOpen(false);
      };

    const toggleAddModal = () => {
        setIsAddModalOpen(!isAddModalOpen);
    }

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
                    <div className="flex w-max gap-2">
                        <Button variant="filled" color="green" size="sm" ripple={true} onClick={() => openCrudModal("edit", stu)}>
                            Edit
                        </Button>

                        <Button variant="filled" color="blue" size="sm" ripple={true} onClick={() => openCrudModal("detail", stu)}>
                            Detail
                        </Button>

                        <Button variant="filled" size="sm" ripple={true} onClick={() => openCrudModal("delete", stu)}>
                            Delete
                        </Button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="flex w-max gap-4 p-5 float-right">
        <Button variant="filled" color="cyan" ripple={true} onClick={() => openCrudModal("add")}>
          Add Student
        </Button>
      </div>
    
        {/* Modals */}
        {isAddModalOpen && (
            <AddStudentModal closeModal={closeModal} />
        )}
        {isEditModalOpen && (
            <EditStudentModal student={selectedStudent} closeModal={closeModal} />
        )}
        {isDetailModalOpen && (
            <DetailStudentModal student={selectedStudent} closeModal={closeModal} />
        )}
        {/* {isDeleteModalOpen && (
        // Render your Delete modal component here
        )} */}

    </div>
  );
}

export default Students;
