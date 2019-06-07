const boom = require('boom');
const Movie = require('../models/movie');


// Get all movies
exports.getMovies = function(req,res){
    try {
        Movie.find().exec(function (err, records) {
            res.send(JSON.stringify(records));
        });
        // console.log(movies)

    } catch (err) {
        throw boom.boomify(err)
    }
};
// Get single movie by ID
exports.getSingleMovie = function(req,res) {
    try {
        Movie.findById(req.params.id).exec(function (err, record) {
            res.send(JSON.stringify(record))
        })
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Add a movie
exports.addMovie = function(req,res) {
    try {
        const movie = new Movie(req.body);
        movie.save(function (err) {
            if (err) return err;
        });
        return res.send(JSON.stringify(movie))
    }
    catch (err) {
        throw boom.boomify(err)
    }
};


// Delete movie
exports.deleteMovie = function(req,res) {
    try {
        Movie.findOneAndRemove(req.params.id).exec(function (err, record) {
            res.send(JSON.stringify("DELETED"))
        })
    } catch (err) {
        throw boom.boomify(err)
    }

};
