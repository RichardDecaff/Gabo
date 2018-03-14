var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: '207.182.141.186',
    user: 'qzklonhs_test',
    password: 'jn=,D@0wa}_3',
    database: 'qzklonhs_test_sistema',
    debug: false
});
module.exports = pool;
