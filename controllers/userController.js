const pool = require('../config/database');

// Function to handle user registration
exports.registerUser = (req, res) => {
    const { name, address } = req.body;

    // Insert user data into `users` table
    pool.query('INSERT INTO users (name) VALUES (?)', [name], (err, userResult) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }

        const userId = userResult.insertId;

        // Insert address data into `addresses` table
        pool.query('INSERT INTO addresses (address, userId) VALUES (?, ?)', [address, userId], (err, addressResult) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }

            res.json({ message: 'User registered successfully' });
        });
    });
};
