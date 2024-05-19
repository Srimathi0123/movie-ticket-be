const express = require('express');
const Movie = require('../model/movieModel');
const initialData = require('../data/initialData');

// Import authMiddleware as a function, without curly braces
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// GET all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find().sort({ movieYear: -1 });
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new movie
router.post('/', authMiddleware, async (req, res) => {
    const { movieName, movieYear, movieGenre1, movieGenre2, imdbRating } = req.body;
    const newMovie = new Movie({ movieName, movieYear, movieGenre1, movieGenre2, imdbRating });
    try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
