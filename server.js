const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Use the user routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
