import React, { useEffect, useState } from 'react';
import './Userlist.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token'); // get token from localStorage

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (err) {
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUsers();
    } else {
      console.error('No token found');
      setLoading(false);
    }
  }, [token]);

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // Add navigation or modal for editing here
  };

  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== userId));
        alert('User deleted successfully.');
      } else {
        const data = await response.json();
        alert(`Failed to delete user: ${data.message}`);
      }
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  if (loading) return <p>Loading...</p>;

  const customerUsers = users.filter((user) => user.role === 'Customer');

  return (
    <div className="userlist-container">
      <h2>Customer Roles</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customerUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.address}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(user._id)}>
                  <FaEdit /> Edit
                </button>
                <button className="delete" onClick={() => handleDelete(user._id)}>
                  <FaTrashAlt /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
