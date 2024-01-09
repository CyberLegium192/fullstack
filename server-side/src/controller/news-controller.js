const newsModels = require("../models/news-models.js");

// GET NEWS LIST  
const getNews =async (req, res) => {
  await newsModels.getListNews(req, res)
}

// POST NEWS
const postNews = async (req, res) => {
  await newsModels.postNews(req, res)
}



module.exports = {
  getNews,
  postNews
}