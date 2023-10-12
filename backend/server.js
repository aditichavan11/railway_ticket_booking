const express = require('express');
const app = express();
const port = 8000;

// Define a route
app.get('/get', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
