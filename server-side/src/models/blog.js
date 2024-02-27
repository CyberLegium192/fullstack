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
  const {username, id_user, profile, date, title, dest} = req.body
  let cover = req.file ? req.file.filename : null
  
  const sql = `INSERT INTO blog (username, id_user, profile, date, cover, title, dest) VALUES (?, ?, ?, ?, ?, ?, ?)`
  
  db.query(sql, [username, id_user, profile, date, cover, title, dest], (err, blog) => {
    if (err) throw err
    res.json({
      message: "success",
      blog
    })
  })
}

const userBlogQuery = (req, res) => {
  const {user_id} = req.params
  
  const sql = `SELECT * FROM blog WHERE id_user=${user_id}`
  db.query(sql, (err, blog) => {
    if (err) throw err
    res.json({
      message: 'success',
      blog
    })
  })
}

const postCommentQuery = (req, res) => {
  const {username, id_user, profile, date, comment, blog_id} = req.body
  const sql = `INSERT INTO comment_blog (username, id_user, profile, date, comment, blog_id) VALUES (?, ?, ?, ?, ?, ?)`
  db.query(sql, [username, id_user, profile, date, comment, blog_id], (err, blog) => {
    if(err) throw err
    return blog
  })
}

const getCommentsQuery = (req, res) => {
  const {blog_id} = req.params
  const sql = ` SELECT * FROM comment_blog WHERE blog_id = ${blog_id}`
  db.query(sql, (err, blog) => {
    if (err) throw err
    res.json({
      message: 'success',
       blog
    })
  })
}




module.exports = {
  getBlogQuery,
  postBlogQuery,
  userBlogQuery,
  postCommentQuery,
  getCommentsQuery
}