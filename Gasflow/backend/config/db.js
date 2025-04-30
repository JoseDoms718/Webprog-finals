const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionString = `mongodb+srv://Gasflow:Gasflow123@gasflow.7bcpnnw.mongodb.net/User?retryWrites=true&w=majority`;

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
