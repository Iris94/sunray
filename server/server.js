const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON request bodies

app.post("/sort-numbers", (req, res) => {
  try {
    const { numbers } = req.body;

    numbers.sort((a, b) => a - b);

    res.json({ sortedNumbers: numbers });
  } catch (error) {
    console.error('Error sorting numbers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(5000, () => {
  console.log('Mali testić ovo ono');
});
