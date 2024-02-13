const songsModel = require("../models/songs-models.js")

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











// ==================== ALBUM ===========================
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
  
  
  // ALBUM
  getAlbums,
  getAlbumByTitle
};