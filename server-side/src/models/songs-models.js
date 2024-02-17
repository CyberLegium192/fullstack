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

// =============  GET SONG BY SETLIST ========
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


// ===================== LYRICS =====================
// GET LYRICS
const lyricsQuery = (req, res) => {
  const judul = req.params.title
  const sql = `SELECT * FROM lyrics WHERE title LIKE '%${judul}%'`
  db.query(sql, (err, lirik) => {
    if(err) throw err;
    res.json({
      message: 'success',
      lirik
    })
  }) 
}
// POST LYRICS
const postLyricsQuery = (req, res) => {
  const {title, lyrics} = req.body
  const sql = `INSERT INTO lyrics (title, lyrics) VALUES (?, ?)`
  db.query(sql, [title, lyrics], (err, lirik) => {
    if(err) throw err;
    return lirik
  })
}


// ================== LIKES SONG =====================
const getUserLikeQuery = (req, res) => {
  const {id_user} = req.params
  const sql = `SELECT * FROM likes WHERE id_user LIKE '%${id_user}%'`
  db.query(sql, (err, likes) => {
    if(err) throw err
    res.json({
      message: 'success',
      likes
    })
  })
}
const getAllUserLikeQuery = (req, res) => {
  const titleSong = req.params.title
  const sql = `SELECT * FROM likes WHERE title LIKE '%${titleSong}%'`
  db.query(sql, (err, likes) => {
    if(err) throw err
    res.json({
      message: 'success',
      likes
    })
  })
}
const likesPostQuery = (req, res) => {
  const {setlist, title, id_user} = req.body
  const sql = `INSERT INTO likes (setlist, title, id_user) VALUES (?, ?, ?)`
  db.query(sql, [setlist, title, id_user], (err, likes) => {
    if(err) throw err
    res.json({
      message: 'success',
      likes: {setlist, title, id_user}
    })
  })
}
const deleteLikeQuery  = (req, res) => {
  const {title, id_user} = req.params
  const sql = `DELETE FROM likes WHERE title LIKE '%${title}%' AND id_user LIKE '%${id_user}%'`
  db.query(sql, (err, likes) => {
    if(err) throw err
    res.json({
      message: 'success deleted',
      likes : {title, id_user}
    })
  })
}





// ================ GET ALBUMS =================
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
  
  // GET LYRICS
  lyricsQuery,
  postLyricsQuery,
  // POST LIKES SONG
  getUserLikeQuery,
  getAllUserLikeQuery,
  likesPostQuery,
  deleteLikeQuery,
  // ALBUM
  getAlbums,
  getAlbumByTitle
};