const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db.js'); // Import the db.js for DB connection
const User = require('./models/User.js');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallbacksecret';

// Connect to the database
connectDB();

app.use(cors({
  origin: 'http://localhost:5173', // Set to the exact frontend address
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
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
});
//delete users
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});
//edit users
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phoneNumber, address, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, phoneNumber, address, role }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});
//edit users
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phoneNumber, address, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, phoneNumber, address, role }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
