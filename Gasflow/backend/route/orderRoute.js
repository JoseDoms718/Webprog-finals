const express = require('express');
const router = express.Router();
const Order = require('../models/Pending.js');  // Adjust the path if necessary

router.post('/orders', async (req, res) => {
  const { name, email, contact, address, item, quantity, price } = req.body;

  // Validate incoming data
  if (!name || !email || !contact || !address || !item || !quantity || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new order
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
