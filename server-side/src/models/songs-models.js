let db = require("../utils/db.js")

// ============= GET ALL SONGS ==================
const getData = (req, res) => {
  const sql = `SELECT * FROM songs`
  db.query(sql, (err, songs) => {
    if (err) throw err
    res.json({
      message: 'success',
      songs
    })
  })
}

// =============  POST SONGS ==================
const postQuery = (req) => {
  const {id, setlist, title, video, view, love} = req.body
  const sql = `INSERT INTO songs (setlist, title, video, view, love) VALUES (?,?,?,?,?)`
  
  db.query(sql, [setlist, title, video, view, love], (err, results) => {
    if(err) throw err
    return results
  })
}

// =============  GET SONG BY SETLIST ==================
const getSetlistQuery = (req, res) => {
  const setlist = req.query.setlist
  const title = req.query.title
  
  const sql = `SELECT * FROM songs WHERE setlist LIKE '%${setlist}%' AND title LIKE '%${title}%'`
  db.query(sql, (err, songs) => {
    if(err) throw err
    res.json({
      message: 'success',
      songs
    })
  })
}



// ===================== GET ALBUMS ======================
const getAlbums = (req, res) => {
  const sql = `SELECT * FROM album`
  
  db.query(sql, (err, album) => {
    res.json({
      message: 'success',
      album
    })
  })
}

const getAlbumByTitle = (req, res) => {
  const title = req.query.title
  const sql = `SELECT * FROM album WHERE setlist LIKE '%${title}%'`
  db.query(sql, (err, album) => {
    res.json({
      message: 'success', 
      album
    })
  })
}









module.exports = {
  getData, 
  postQuery,
  getSetlistQuery,
  
  
  // ALBUM
  getAlbums,
  getAlbumByTitle
};