const express = require('express');
const router = express.Router();
const Order = require('../models/Pending.js');

// POST route to create a new order
router.post('/orders', async (req, res) => {
  const { name, email, contact, address, item, quantity, price } = req.body;

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

    await newOrder.save();

    res.status(201).json({ message: 'Order saved successfully', order: newOrder });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
