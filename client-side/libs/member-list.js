// MEMBER LIST
import axios from 'axios'

// ================== MEMBER LIST ========================
export const memberList = async (source) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/${source}`)
    return response.data.results
}

// ================== MEMBER BY ID ========================
export const getMemberById = async(id) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/member/memberDetail/${id}`)
    return response.data.results[0]
}

// MEMBER LIVE
export const liveShowroom = async (source) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL_LIVESHOWROOM}/api/rooms/${source}`)
  const data = await response.json()
  return data
}
