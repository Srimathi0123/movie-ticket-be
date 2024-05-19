// routes/movieRoutes.js
const express = require('express');
const { getAllMovies, addMovie, suggestMovie } = require('../controllers/movieController');

const router = express.Router();

router.get('/movies', getAllMovies);
router.post('/movie/addMovie', addMovie);
router.post('/movie/suggest', suggestMovie);

module.exports = router;
