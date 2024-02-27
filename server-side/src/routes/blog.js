const express = require("express");
const router = express.Router();
const upload = require("../middleware/blogMulter.js");
const blogControl = require("../controller/blogControl.js")

// GET ALL BLOG
router.get("/", (req, res) => blogControl.getBlog(req, res))
// POST BLOG
router.post("/post", upload.single("cover"), (req, res) => {
  blogControl.postBlog(req,res)
})

// GET BLOG USER
router.get('/user/:user_id', (req, res) => blogControl.getUserBlog(req, res))

// POST COMMENT BLOG
router.post('/comments', (req, res) => blogControl.postComments(req, res))

// GET COMMENT BLOG
router.get('/comments/:blog_id', (req, res)=> blogControl.getComments(req, res))



module.exports = router