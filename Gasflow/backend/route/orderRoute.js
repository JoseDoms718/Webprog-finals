const express = require('express');
const router = express.Router();
const Order = require('../models/Pending.js');
const { protect, isAdmin } = require('../middleware/auth.js');  // Import the auth middlewares

// POST route to create a new order
router.post('/orders', async (req, res) => {
  const { name, email, contact, address, item, quantity, price } = req.body;

  // Validate incoming data
  if (!name || !email || !contact || !address || !item || !quantity || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newOrder = new Order({
      name,
      email,
      contact,
      address,
      item,
      quantity,
      price
    });

    // Save the order to the database
    await newOrder.save();

    // Return a success response
    res.status(201).json({ message: 'Order saved successfully', order: newOrder });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
