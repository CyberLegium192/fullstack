const songsModel = require("../models/songs-models.js")


// ==================== SONGS =====================
// GER ALL SONGS
const getSongs = async(req, res) => {
  try {
    await songsModel.getData(req, res)
  } catch (e) { 
      res.json({message: 'error get data', err: e.message})
  }
};
// POST SONG
const postSong = async(req, res) => {
  try {
    const {id, setlist, title, video, view, love} = req.body
    await songsModel.postQuery(req)
    res.json({
      message: 'success',
      results: setlist,title,video, view, love
    })
  } catch (e) {
    res.json({
      message: 'ERORR POST',
      err: e.message
    })
  }
}
// GET SONG BY setlist
const getSetlist = async(req, res) => {
  try {
    await songsModel.getSetlistQuery(req, res)
  } catch (e) {res.json({message: 'err', err: e.message})}
}

// ===================== LYRICS ====================
// GET LYRICS 
const lyrics = async(req, res) => {
  try {
    await songsModel.lyricsQuery(req, res)
  } catch (e) {
    res.json({message: 'CANNOT GET LYRICS', err: e.message})
  }
}
// POST LIRIK
const postLyrics = async(req, res) => {
  try {
    const {id, title, lyrics} = req.body
    await songsModel.postLyricsQuery(req, res)
    res.json({
      message: 'success', 
      lirik: {id, title, lyrics}
    })
  } catch (e) {
    res.json({message: 'CANNOT POST LYRICS', err: e.message})
  }
}



// =================== LIKE SONG =================
const getUserLike = async(req, res) => {
  try {
    await songsModel.getUserLikeQuery(req, res)
  } catch (e) {res.json({message: 'cannot get', err: e.message})}
}
const getAllLikeSong = async(req, res) => {
  try {
    await songsModel.getAllUserLikeQuery(req, res)
  } catch (e) {res.json({message: 'cannot get', err: e.message})}
}
const likesPost = async(req, res) => {
  try {
    await songsModel.likesPostQuery(req, res)
  } catch (e) {res.json({message: 'error post', err: e.message})}
}
const deleteLike = async(req, res) => {
  try {
    await songsModel.deleteLikeQuery(req, res)
  } catch (e) {res.json({message: 'error post', err: e.message})}
}





// =============== ALBUM ====================
const getAlbums = async(req, res) => {
  try {
    await songsModel.getAlbums(req, res)
  } catch (e) {res.json({message: 'ERORR', err: e.message})}
}

const getAlbumByTitle = async(req, res) => {
  try {
    await songsModel.getAlbumByTitle(req, res)
  } catch (e) {res.json({message: 'ERORR', err: e.message})}
}






module.exports = {
  getSongs,
  postSong,
  getSetlist,
  // GET LYRICS
  lyrics,
  postLyrics,
  // POST LIKE
  getUserLike,
  getAllLikeSong,
  likesPost,
  deleteLike,
  // ALBUM
  getAlbums,
  getAlbumByTitle
};