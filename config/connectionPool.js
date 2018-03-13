var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bd_sistema',
    debug: false
});
module.exports = pool;
