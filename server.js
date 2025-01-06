// Import the Express module
const express = require('express');
const app = express();

// Define the port
const port = 5000;

// Create a basic route
app.get('/', (req, res) => {
  res.send('Hello, World! Your Express server is running with nodemon.');
});

app.get('/user/:name', (req, res) => {
    const { name } = req.params; // Get route parameters
    res.send(`Hello, ${name}!.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
