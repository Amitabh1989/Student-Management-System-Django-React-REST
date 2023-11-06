import axios from "axios";

export const API_BASE_URL = "http://127.0.0.1:8000"; // Update with your actual API base URL

// Create an Axios instance with a base URL
const api = axios.create({
    baseURL: API_BASE_URL, // Set your base URL here
});

// export function getStudents() {
//     return axios.get("http://127.0.0.1:8000/students/")
//         .then(response => response.data)
// }


// Get Steudent List API Call
export function getStudents() {
    return api.get("/students/")
        .then(response => response.data)
}


// Edit Student List API call
// export function editStudents(studentId, newData) {
//   // Define the endpoint to edit a student (assuming it's "/students/{studentId}")
//   const endpoint = `/students/${studentId}`;

//   // Make a PUT or PATCH request to update the student data
//   return api.put(endpoint, newData)
//     .then(response => response.data)
//     .catch(error => {
//       // Handle any errors here
//       throw error; // You can choose to rethrow or handle the error as needed
//     });
// }

// Using Async/Await code style here
export async function editStudents(studentId, newData) {
    try {
        console.log("In Edit Student : ", studentId, newData);
        const endpoint = `/students/${studentId}/`;
        const response = await api.patch(endpoint, newData);
        return response.data;
    } catch (error) {
        console.log("In Edit Student error service : ", error);
        throw error;
    }
}

// Using Async/Await code style here
export async function addStudents(newData) {
    try {
        const response = await api.post("/students/", newData);
        return response.data;
    } catch (error) {
        throw error;
    }
}