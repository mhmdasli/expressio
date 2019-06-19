var db      = require('mysql');
var mysql = db.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});
mysql.connect();

module.exports = mysql;
