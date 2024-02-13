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




// =================== ALBUM =============================
export const getAlbumQuery = async (value) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_API}/song/albums/search${value}`)
    return response.data.album
}
// ?title=ramune