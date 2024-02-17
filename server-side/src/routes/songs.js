const express = require("express");
const router = express.Router();
const songsControl = require('../controller/songs-control.js')


// ====================== SONGS =========================
// GET ALL SONG ROUTES
router.get('/songs', (req, res) => songsControl.getSongs(req, res))
// POST SONG ROUTE
router.post('/post/song', (req, res) => songsControl.postSong(req, res))
// GET BY SETLIST OR TITLE
router.get('/setlist', (req, res) => songsControl.getSetlist(req, res))


// ===================== LYRICS ========================
// GET LYRICS
router.get('/lyrics/:title', (req, res) => songsControl.lyrics(req, res))
// POST LYRICS
router.post('/lyrics', (req, res) => songsControl.postLyrics(req, res))



// =================== LIKE POST SONG ==================
// GET USER LIKE SONG
router.get('/likes/:id_user', (req, res) => songsControl.getUserLike(req, res))
// GET ALL USER LIKE SONG 
router.get('/:title/likes', (req, res) => songsControl.getAllLikeSong(req, res))
// POST USER LIKE SONG
router.post('/likes', (req, res) => songsControl.likesPost(req, res))
// UNLIKE SONG USER
router.delete('/likes/:title/:id_user', (req, res) => songsControl.deleteLike(req, res))





// ======================== ALBUMS ========================
// GET ALBUM SONG
router.get('/albums', (req, res) => songsControl.getAlbums(req, res))
// GET ALBUM BY QUERY REQUEST
router.get('/albums/search', (req, res) => songsControl.getAlbumByTitle(req, res))





module.exports = router