const con = require('../utils/db.js')


const postUser = (body, hashedPassword) => {
  const {username, email, password, bio, gender} = body
  const sql = `INSERT INTO user (username, email, password, bio, gender) VALUES (?, ?, ?, ?, ?)`
  con.query(sql, [username, email, hashedPassword, bio, gender], (err, results) => {
    if (error) {
      res.status(500).json({ error: 'Gagal mendaftarkan pengguna' });
    } else {
      res.json({ success: 'Pengguna berhasil didaftarkan' });
    }
  });
}
const getUserByEmail = (email, callback) => {
  // console.log(email)
  const sql = `SELECT * FROM user WHERE email= ?`
  con.query(sql, [email], (err, results) => {
    if(err) throw err
    callback(results[0])
  })
}


module.exports = {
  postUser,
  getUserByEmail
}