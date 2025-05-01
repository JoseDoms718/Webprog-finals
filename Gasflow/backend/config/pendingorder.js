// config/pendingDb.js
const mongoose = require('mongoose');

const connectPendingOrdersDB = () => {
  const uri = 'mongodb+srv://Gasflow:Gasflow123@gasflow.7bcpnnw.mongodb.net/PendingOrders?retryWrites=true&w=majority';

  const pendingConnection = mongoose.createConnection(uri);

  pendingConnection.on('connected', () => {
    console.log('Connected to PendingOrders database');
  });

  pendingConnection.on('error', (err) => {
    console.error('Error connecting to PendingOrders database:', err);
  });

  return pendingConnection;
};

module.exports = connectPendingOrdersDB;
