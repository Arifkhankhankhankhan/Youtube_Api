// Connect to MongoDB to store and manage data
 
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI,);
    console.log('Connected to Database!!');
  } catch (err) {
    console.error('Error connecting to Database:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
