const userModels = require("../models/models.js");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = `${process.env.SECRET_KEY}`;

function getUserByEmail(email, callback){
  userModels.getUserByEmail(email, callback)
}

const userRegis = async (req, res) => {
    try {
    const body = req.body;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds)
    await userModels.postUser(body, hashedPassword);
      res.status(200).json({
        message: "CREATE NEW User Success",
        body
      });
    } catch (e) {
      res.json({
        message: e.message
      })
    }
};

const userLogin = (req, res) => {
  const {email, password} = req.body;
  
  getUserByEmail(email, (user) => {
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ userId: user }, secretKey, { expiresIn: '2h' });
        res.cookie('token', token, { expires: new Date(Date.now() + 2 * 60 * 60 * 1000)})
        res.json({ token, user });
      } else {
        res.status(401).json({ error: 'Password salah' });
      }
    } else {
      res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }
  });
}


module.exports = {
    userRegis,
    userLogin
};
