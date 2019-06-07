const express = require('express');
express().use(express.json());
let router = express.Router();

const movieController = require('../controllers/movieController')



router.get('/api/movies', movieController.getMovies);

router.get('/api/movies/:id', movieController.getSingleMovie);

router.post('/api/movies', movieController.addMovie);

router.delete('/api/movies/:id', movieController.deleteMovie);


module.exports = router;
