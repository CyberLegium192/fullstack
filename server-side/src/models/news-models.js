const db = require('../utils/db.js')
// NEWS LIST QUERY
const getListNews = (req, res) => {
  const sql = `SELECT * FROM news`
  db.query(sql, (err, news) => {
    if (err) throw err
    res.json({
      message: 'success',
      news
    })
  })
}

// POST NEWS QUERY
const postNews = (req, res) => {
  const {tema, title, date, link} = req.body
  const sql = `INSERT INTO news (tema, title, date, link) VALUES (?, ?, ?, ?)`
  db.query(sql, [tema, title, date, link], (err, results) => {
    if (err) throw err
    res.json({
      message: 'success',
      results
    })
  })
  
} 


module.exports={
  getListNews,
  postNews
}