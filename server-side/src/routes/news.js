const express = require("express");
const router = express.Router();
const newsController = require('../controller/news-controller.js')


// GET LIST NEWS
router.get("/newslist", (req, res) => newsController.getNews(req, res))

// POST NEWS 
router.post("/post/news", (req, res) => newsController.postNews(req, res))



module.exports = router;