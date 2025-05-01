import React from 'react';
import { FaEye, FaCheck, FaTimes } from 'react-icons/fa';
import './Orderlistpending.css';

function Orderlistpending() {
    return (
        <div className="orderlist-container">
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sample Product</td>
                        <td>2</td>
                        <td>₱1,000</td>
                        <td>123 Main St.</td>
                        <td>09123456789</td>
                        <td className="action-buttons">
                            <button className="btn view-btn">
                                <FaEye /> View
                            </button>
                            <button className="btn confirm-btn">
                                <FaCheck /> Confirm
                            </button>
                            <button className="btn decline-btn">
                                <FaTimes /> Decline
                            </button>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}

export default Orderlistpending;