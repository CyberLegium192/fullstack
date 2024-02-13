const express = require("express");
const router = express.Router();
const songsControl = require('../controller/songs-control.js')


// GET ALL SONG ROUTES
router.get('/songs', (req, res) => songsControl.getSongs(req, res))

// POST SONG ROUTE
router.post('/post/song', (req, res) => songsControl.postSong(req, res))

// GET BY SETLIST OR TITLE
router.get('/setlist', (req, res) => songsControl.getSetlist(req, res))






// GET ALBUM SONG
router.get('/albums', (req, res) => songsControl.getAlbums(req, res))
// GET ALBUM BY QUERY REQUEST
router.get('/albums/search', (req, res) => songsControl.getAlbumByTitle(req, res))





module.exports = router