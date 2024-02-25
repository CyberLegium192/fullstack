const blogQuery = require("../models/blog.js")


const getBlog = async(req, res) => {
  try {
    await blogQuery.getBlogQuery(req, res)
  } catch (e) {res.json({message: "erorr", erorr: e.message})}
}

const postBlog = async(req, res) => {
  try {
    await blogQuery.postBlogQuery(req, res)
  } catch (e) {res.json({message: "erorr", erorr: e.message})}
}

module.exports = {
  getBlog,
  postBlog
}