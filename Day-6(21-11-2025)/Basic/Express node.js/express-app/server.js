// Load the express module
const express = require('express');

// Create an express application
const app = express();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Another example route
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
