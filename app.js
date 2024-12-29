const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS

// Test route
app.get('/', (req, res) => {
    res.send('E-commerce Backend API is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});