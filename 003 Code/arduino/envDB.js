const mysql = require('mysql');
const db = mysql.createConnection({
        host: 'DB Server IP',
        user: 'User Name',
        password: 'Password',
        database: 'Database Name'
});

module.exports = db;