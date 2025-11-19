const express = require('express');
const app = express();

app.get('/error-route', (req, res, next) => {
    const userId = 'admin'; // Simulate a condition that causes an error
    if (userId === 'admin') {
        const error = new Error('Admin user not allowed');
        error.statusCode = 403;
        next(error); // Propagate error to error-handling middleware
    } else {
        res.send('Welcome!');
    }
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message || 'Internal Server Error'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});