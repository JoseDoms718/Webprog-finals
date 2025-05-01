import React from 'react';
import './Orderlistpending.css';

function Orderlistpending() {
    return (
        <div className="p-4">
            <h2 className="heading">Pending Orders</h2>
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
                            <button className="btn view-btn">View</button>
                            <button className="btn confirm-btn">Confirm</button>
                        </td>
                    </tr>
                    {/* Additional sample rows can be added here */}
                </tbody>
            </table>
        </div>
    );
}

export default Orderlistpending;
