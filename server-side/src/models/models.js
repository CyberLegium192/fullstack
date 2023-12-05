const con = require('../utils/db.js')


const postUser = (body, hashedPassword, avatar, req, res) => {
  const {username, email, password, bio, gender, role} = body
  const profile = req.file.filename
  
  const sql = `INSERT INTO user (username, email, password, bio, gender, role, avatar) VALUES (?, ?, ?, ?, ?, ?, ?)`
  con.query(sql, [username, email, hashedPassword, bio, gender, role, profile], (err, results) => {
    if (err) {
      res.json({
        message: "erorr kontol"
      });
    } else {
      return results
    }
  });
}

const updateUser = (body, avatar, req, res) => {
  const {username, email, bio, gender, role} = body
  const id = req.params.id
  const profile = req.file.filename
  
  const sql = `UPDATE user SET username='${username}', bio='${bio}', gender='${gender}', avatar='${profile}' WHERE id ='${id}'`
  con.query(sql, (err, results) => {
    if (err) {
      console.log(err.message)
      res.json({
        message: err.message
      });
    } else {
      res.json({
        message: "successfully"
      })
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
  updateUser,
  getUserByEmail
}