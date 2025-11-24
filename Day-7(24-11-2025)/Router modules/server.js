const express = require('express');
const app = express();

// Parse JSON body
app.use(express.json());

// Import Route Modules
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Use Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
