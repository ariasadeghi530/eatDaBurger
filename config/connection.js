require('dotenv').config()
const { createConnection } = require('mysql2');

const connection = createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_USER,
  database: 'burgers_db'
})

module.exports = connection;