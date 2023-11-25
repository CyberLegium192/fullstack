const mysql = require("mysql")

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: `${process.env.DATABASE_NAME}`,
})

module.exports = con