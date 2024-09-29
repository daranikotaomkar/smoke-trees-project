const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'mysql', 
    password: 'mysql', 
    database: 'smoke_trees' 
});

module.exports = pool;
