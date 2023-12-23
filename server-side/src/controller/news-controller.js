const db = require('../utils/db.js')

const getNews = (req, res) => {
  const sql = `SELECT * FROM news`
  db.query(sql, (err, news) => {
    if (err) throw err
    res.json({
      message: 'success',
      news
    })
  })
}


module.exports = {getNews}