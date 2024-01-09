import axios from 'axios'
// NEWS LIST 
export const getNewsList = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_API}/news/newsList`)
  const data = await response.json()
  return data.news
}

// POST NEWS
export const newsPost = async (values) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_API}/news/post/news`, values)
  return response.data
}
