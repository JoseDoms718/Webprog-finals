// models/Pending.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true },
  status: { type: String, default: 'pending' }
}, { timestamps: true });

// 👇 Export a function that takes a connection and returns the model
module.exports = (connection) => connection.model('Order', orderSchema);
