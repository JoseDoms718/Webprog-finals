// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionString = process.env.DB_USER_URI || 'mongodb+srv://Gasflow:Gasflow123@gasflow.7bcpnnw.mongodb.net/User?retryWrites=true&w=majority';

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB User database connected...");
  } catch (err) {
    console.error("Error connecting to User DB:", err);
    process.exit(1);
  }
};

module.exports = { connectDB };
