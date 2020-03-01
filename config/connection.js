require('dotenv').config()
const { createConnection } = require('mysql2');

let connection;
if(process.env.JAWSDB_URL){
  connection = createConnection(process.env.JAWDSDB_URL);
}
else{
 connection = createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'burgers_db'
}})

module.exports = connection;