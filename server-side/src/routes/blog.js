const express = require("express");
const router = express.Router();
const upload = require("../middleware/blogMulter.js");
const blogControl = require("../controller/blogControl.js")


router.get("/", (req, res) => blogControl.getBlog(req, res))

router.post("/post", upload.single("cover"), (req, res) => {
  blogControl.postBlog(req,res)
})



module.exports = router