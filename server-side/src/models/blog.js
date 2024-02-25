const db = require("../utils/db.js")


const getBlogQuery = (req, res) => {
  const sql = `SELECT * FROM blog`
  db.query(sql, (err, blog) => {
    if(err) throw err
    res.json({
      message: 'success',
      blog
    })
  })
} 

const postBlogQuery = (req, res) => {
  const {username, profile, date, title, dest} = req.body
  let cover = req.file ? req.file.filename : null
  
  
  const sql = `INSERT INTO blog (username, profile, date, cover, title, dest) VALUES (?, ?, ?, ?, ?, ?)`
  
  db.query(sql, [username, profile, date, cover, title, dest], (err, blog) => {
    if (err) throw err
    res.json({
      message: "success",
      blog
    })
  })
}




module.exports = {
  getBlogQuery,
  postBlogQuery
}