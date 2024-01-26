import axios from 'axios'


export const getMerch = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/merch`)
  return response.data.results
}