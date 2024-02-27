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

const getUserBlog = async(req, res) => {
  try {
    await blogQuery.userBlogQuery(req, res)
  } catch (e) {res.json({message: "erorr", erorr: e.message})}
}

const postComments = async(req, res) => {
  try {
    const {username, id_user, profile, date, comment, blog_id} = req.body
    await blogQuery.postCommentQuery(req, res)
    res.json({
      message: 'success',
      blog: {username, id_user, profile, date, comment, blog_id}
    })
    
  } catch (e) {res.json({message: "erorr", erorr: e.message})}
}

const getComments = async(req, res) => {
  try {
    await blogQuery.getCommentsQuery(req, res)
  } catch (e) {res.json({message: "erorr", erorr: e.message})}
}

module.exports = {
  getBlog,
  postBlog,
  getUserBlog,
  postComments,
  getComments
}