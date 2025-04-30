const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Make sure the path to your User model is correct
const connectDB = require('./config/db'); // Make sure the path to your db connection is correct

connectDB();

const createAdmin = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("Doms123", salt);

  const adminUser = new User({
    name: "Dominique Admin",
    email: "loto.dominiquejose@marsu.edu.ph",
    password: hashedPassword,
    phoneNumber: "09773887348",
    address: "Sawi Boac Marinduque",
    role: "Admin"
  });

  try {
    await adminUser.save();
    console.log("Admin account created successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error creating admin account:", err);
  }
};

createAdmin();