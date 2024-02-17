import axios from 'axios'

// GET ALL SONGS
export const getSongs = async (value) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/song${value}`)
    return response.data.songs
}

// GET BY TITLE SONG
export const getSongsBySetlist = async (value) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/song/setlist${value}`)
    return response.data.songs
}


// GET LIRIK 
export const getLirik = async(value) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/song/lyrics${value}`)
  return response.data.lirik
}


// LIKE USER LIKE BY ID USER
export const getLikesUser = async(value) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/song/likes/${value}`)
  return response.data.likes
}
// GET TOTAL LIKE FOR SONG
export const getTotalLikeSong = async(value) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/song/${value}/likes`)
  return response.data.likes
}
// LIKE SONG
export const postLikes = async(value) => {
  const response = await axios.post(`${import.meta.env.VITE_BASE_API}/song/likes`, value)
  return response.data.likes
}
// UNLIKE SONG
export const deleteLikes = async(title, id_user) => {
  const response = await axios.delete(`${import.meta.env.VITE_BASE_API}/song/likes/${title}/${id_user}`)
  return response.data.likes
}









// =================== ALBUM ===============
export const getAlbumQuery = async (value) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/song/albums/search${value}`)
    return response.data.album
}
