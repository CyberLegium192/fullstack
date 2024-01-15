import axios from 'axios'


// NEWS LIST 
export const getNewsList = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/news/newsList`)
  const data = await response.json()
  return data.news
}

// GET NEWS BY ID 
export const getById = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/news/${id}`)
  return response.data.news
}

// POST NEWS
export const newsPost = async (values) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_API}/news/post/news`, values)
  return response.data
}

// EDIT NEWS
export const updateNews = async (id, values) => {
  const response = await axios.patch(`${import.meta.env.VITE_BASE_API}/news/edit/news/${id}`, values)
  return response.data
}

// DELETE NEWS
export const newsDelete = async (id) => {
  const response = await axios.delete(`${import.meta.env.VITE_BASE_API}/news/delete/news/${id}`)
  return response.data
}