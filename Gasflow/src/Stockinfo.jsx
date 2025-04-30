import React, { useState } from 'react';
import './Stockinfo.css';

function Stockinfo() {
  const stockData = {
    'May 2025': {
      transactions: [
        { id: 1, type: 'Sold', quantity: 100, date: '2025-05-02' },
        { id: 2, type: 'Reserve', quantity: 5, date: '2025-05-03' },
        { id: 3, type: 'Sold', quantity: 20, date: '2025-05-10' },
        { id: 4, type: 'Available', quantity: 340, date: '2025-05-11' },
      ],
    },
    'April 2025': {
      transactions: [
        { id: 5, type: 'Sold', quantity: 15, date: '2025-04-21' },
        { id: 6, type: 'Available', quantity: 300, date: '2025-04-25' },
        { id: 7, type: 'Reserve', quantity: 60, date: '2025-04-26' },
        { id: 8, type: 'Sold', quantity: 75, date: '2025-04-28' },
      ],
    },
  };

  const monthKeys = Object.keys(stockData);
  const [selectedMonth, setSelectedMonth] = useState(monthKeys[0]);

  const data = stockData[selectedMonth];

  const getTotal = (type) =>
    data.transactions
      .filter((txn) => txn.type.toLowerCase() === type.toLowerCase())
      .reduce((sum, txn) => sum + txn.quantity, 0);

  return (
    <div className="stock-container">
      <div className="stock-status">
        <div className="stock-card sold">Sold: {getTotal('Sold')}</div>
        <div className="stock-card available">Available: {getTotal('Available')}</div>
        <div className="stock-card reserve">Reserve: {getTotal('Reserve')}</div>
      </div>

      <div className="filter-bar centered">
        <label>Select Month to View: </label>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          {monthKeys.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="stocktable-container">
        <h3>Transactions - {selectedMonth}</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
  {data.transactions
    .filter((txn) => txn.type === 'Sold') // Only show 'Sold' entries
    .map((txn) => (
      <tr key={txn.id}>
        <td>{txn.id}</td>
        <td>{txn.type}</td>
        <td>{txn.quantity}</td>
        <td>{txn.date}</td>
      </tr>
    ))}
</tbody>

        </table>
      </div>
    </div>
  );
}

export default Stockinfo;
