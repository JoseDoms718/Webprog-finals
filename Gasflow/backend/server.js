const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB } = require('./config/db.js');
const User = require('./models/User.js');
require('dotenv').config();
const { protect, isAdmin } = require('./middleware/auth.js');

const connectPendingOrdersDB = require('./config/pendingorder.js');
const pendingOrdersConnection = connectPendingOrdersDB();
const Order = require('./models/Pending.js')(pendingOrdersConnection); /// inject connection

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallbacksecret';

// Connect to User database
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Signup Route
app.post('/signup', async (req, res) => {
  const { name, email, password, phoneNumber, address, role } = req.body;
  if (!name || !email || !password || !phoneNumber || !address) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role: role || 'Customer'
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password are required.' });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      message: 'Login successful.',
      token,
      role: user.role
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
});

// Get all users (for admin or other roles)
app.get('/users', protect, isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
});

// Delete user (Admin only)
app.delete('/users/:id', protect, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Edit user (Admin only)
app.put('/users/:id', protect, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phoneNumber, address, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, phoneNumber, address, role },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Order Submission Route
app.post('/orders', async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({ message: 'Order saved successfully', order: newOrder });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders from the database
    res.status(200).json(orders); // Send orders as response
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.put('/orders/:id', protect, isAdmin, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // Status from the frontend

  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.error('Error updating order status:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
