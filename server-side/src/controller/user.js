const userModels = require("../models/models.js");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretKey = `${process.env.SECRET_KEY}`;

function getUserByEmail(email, callback){
  userModels.getUserByEmail(email, callback)
}

const userRegis = async (req, res) => {
    try {
    const avatar = req.file.filename
    const body = req.body;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds)
    await userModels.postUser(body, hashedPassword, avatar, req, res);
      res.json({
        message: "CREATE NEW User Success",
        body,
        avatar
      });
    } catch (e) {
      res.json({
        message: e.message
      })
    }
};

const updateUser = async (req, res) => {
    try {
    const avatar = req.file.filename
    const body = req.body;
    await userModels.updateUser(body, avatar, req, res);
    res.json({
      message: "success update user"
    })
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
        res.json({ error: 'Password salah' });
      }
    } else {
      res.json({ error: 'Pengguna tidak ditemukan' });
    }
  });
}


module.exports = {
    userRegis,
    updateUser,
    userLogin
};
