import axios from 'axios'


export const dateConvert = (value) => {
  const date = new Date()
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const day = date.getDate()
  const month = date.getMonth()
  const years = date.getFullYear()
  return `${day} ${monthNames[month]} ${years}`
}


// GET BLOG
export const getBlog = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/blog`)
  return response.data.blog
}


// POST BLOG
export const postBlog = async (value) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_API}/blog/post`, value, {
      headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}