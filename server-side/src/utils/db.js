const mysql = require("mysql")

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: `${process.env.DATABASE_NAME}`,
})
// const con = mysql.createConnection({
//   host: 'mysql-160679-0.cloudclusters.net',
//   port: "17201",
//   user: 'admin',
//   password: 'rT2EXBDN',
//   database: 'ngidol'
// })

module.exports = con