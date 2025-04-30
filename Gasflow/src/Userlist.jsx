import './Userlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Userlist() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetching users from the backend
        const token = localStorage.getItem('authToken');  // Assuming the token is stored in localStorage

        if (token) {
            axios.get('http://localhost:5000/users', {
                headers: {
                    'x-auth-token': token,  // Send the token in the request header
                }
            })
                .then(res => {
                    console.log("Fetched users:", res.data); // Log the full response for debugging
                    setUsers(res.data);
                })
                .catch(err => console.error("Failed to fetch users:", err));
        } else {
            console.log("No token found, cannot fetch users.");
        }
    }, []); // This ensures the request is made once when the component mounts

    const handleDelete = async (userId) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.delete(`http://localhost:5000/users/${userId}`, {
                headers: {
                    'x-auth-token': token,  // Send the token in the request header
                }
            });
            setUsers(users.filter(user => user._id !== userId)); // Update the state to remove the deleted user
            alert("User deleted successfully!");
        } catch (err) {
            console.error("Failed to delete user:", err);
            alert("Error deleting user");
        }
    };

    const handleEdit = (userId) => {
        console.log("Editing user with ID:", userId);
        // Implement edit functionality here
    };

    return (
        <div className="userlist-container p-4">
            {users.length === 0 ? (
                <p>Loading users...</p>
            ) : (
                <table className="userlist-table w-full border-collapse border border-gray-300">
                    <thead className="userlist-table-head bg-gray-100">
                        <tr>
                            <th className="table-header border px-4 py-2 text-left">Name</th>
                            <th className="table-header border px-4 py-2 text-left">Email</th>
                            <th className="table-header border px-4 py-2 text-left">Address</th>
                            <th className="table-header border px-4 py-2 text-left">Phone Number</th>
                            <th className="table-header border px-4 py-2 text-left">Role</th>
                            <th className="table-header border px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="userlist-table-body">
                        {users.map((user) => (
                            <tr key={user._id} className="userlist-row">
                                <td className="table-cell border px-4 py-2">{user.name}</td>
                                <td className="table-cell border px-4 py-2">{user.email}</td>
                                <td className="table-cell border px-4 py-2">{user.address}</td>
                                <td className="table-cell border px-4 py-2">{user.phoneNumber}</td>
                                <td className="table-cell border px-4 py-2">{user.role}</td>
                                <td className="table-cell border px-4 py-2 text-center">
                                    <button
                                        className="edit-button bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                                        onClick={() => handleEdit(user._id)}
                                    >
                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                    </button>
                                    <button
                                        className="delete-button bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Userlist;
