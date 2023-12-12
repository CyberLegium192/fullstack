const express = require("express");
const router = express.Router();
const userController = require("../controller/user.js");
const upload = require("../middleware/userMulter.js");
const jwt = require('jsonwebtoken');
const secretKey = `${process.env.SECRET_KEY}`;

const verifyToken = (req, res, next) => {
    const token = req.cookies && req.cookies.token;

    if (!token) {
        return res.json({ error: "Token tidak disediakan" });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.json({ error: "Token tidak valid" });
        }
        req.userId = decoded.userId;
        next();
    });
}

router.post("/register", upload.single("avatar"), (req, res) => userController.userRegis(req, res));
router.patch("/update/:id", upload.single("avatar"), (req, res) => userController.updateUser(req, res));
router.post("/login", (req, res) => userController.userLogin(req, res));
router.get("/profileUser", verifyToken, (req, res) => {
  return res.json({
    message: "SUCCESS",
    user: req.userId
  })
})


module.exports = router;
