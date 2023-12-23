const express = require("express");
const router = express.Router();
const newsController = require('../controller/news-controller.js')

router.get("/newslist", (req, res) => newsController.getNews(req, res))

module.exports = router;