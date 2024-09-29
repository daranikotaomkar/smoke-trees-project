const fs = require('fs');
const path = require('path');
const pool = require('../config/database'); 


const sqlFilePath = path.join(__dirname, 'schema.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');


pool.query(sql, (err, results) => {
    if (err) {
        console.error('Error setting up the database:', err);
        process.exit(1);
    }
    console.log('Database setup complete!');
    process.exit(0); 
});
