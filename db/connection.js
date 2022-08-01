var mysql = require('mysql');

const {DB_HOST,DB_PORT,DB_NAME,DB_USER,DB_PASS} = process.env
var con = mysql.createConnection({
  host: DB_HOST || "localhost",
  user: DB_USER || "yourusername",
  password: DB_PASS || "yourpassword",
  port:DB_PORT || 3306,
  database:DB_NAME || "yourdbname"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});