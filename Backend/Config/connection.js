const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { MONGO_URI, PORT } = process.env;

async function connectToDatabase() {
  try {
    if (!MONGO_URI) {
      throw new Error('MONGO_URI is not defined in the environment variables.');
    }

    await mongoose.connect(MONGO_URI, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

function createServer() {
  const port = PORT || 3000;
  console.log(`Server is running on port ${port}`);
}

module.exports = { connectToDatabase, createServer };
