import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Adminorderstatus from './Adminorderstatus';
import './Orderlistpending.css';

function Orderlistpreparing() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingOrders = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        if (!token) {
          setError('No authentication token found.');
          setLoading(false);
          return;
        }

        const response = await fetch('http://localhost:5000/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,  // Send the token in the request header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrders(data);  // Store the pending orders in state
          setLoading(false);
        } else {
          const data = await response.json();
          setError(data.message || 'Failed to fetch pending orders');
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError('An error occurred while fetching orders.');
        console.error('Error fetching orders:', error);
      }
    };

    fetchPendingOrders();
  }, []); // The empty dependency array ensures this runs only once when the component mounts.

  // If loading, display a loading message
  if (loading) {
    return <div>Loading pending orders...</div>;
  }

  // If there's an error, display it
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Function to confirm order and update its status to 'preparing'
  const handleConfirmOrder = async (order) => {
    const updatedOrder = { ...order, status: 'dispatched' }; // Update the status to preparing

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/orders/${order._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(updatedOrder), // Send the updated order
      });

      if (response.ok) {
        const updatedData = await response.json();
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === updatedData._id ? updatedData : order
          )
        );
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to update order status');
      }
    } catch (error) {
      console.error('Error confirming order:', error);
      setError('An error occurred while confirming the order.');
    }
  };

  const handleDeclineOrder = (order) => {
    console.log('Declining order:', order);
    // Add logic to decline the order (update its status, etc.)
  };

  return (
    <>
    <div className="admin-container">
    <Sidebar/>
    </div>
    <div className="adminorder-container">
      <Adminorderstatus/>
    <div className="orderlist-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Email</th> {/* Added Email column */}
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {orders.filter(order => order.status === 'preparing').length === 0 ? (
            <tr>
            <td colSpan="7">No preparing orders found.</td>
            </tr>
        ) : (
            orders
            .filter(order => order.status === 'preparing')
            .map((order) => (
                <tr key={order._id}>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>₱{order.price.toLocaleString()}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.contact}</td>
                <td className="action-buttons">
                    <button className="btn confirm-btn" onClick={() => handleConfirmOrder(order)}>
                    <FaCheck /> Confirm
                    </button>
                    <button className="btn decline-btn" onClick={() => handleDeclineOrder(order)}>
                    <FaTimes /> Decline
                    </button>
                </td>
                </tr>
            ))
        )}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default Orderlistpreparing;
