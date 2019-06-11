const boom = require('boom');
const Movie = require('../models/movie');


// Get all movies
exports.getMovies = function(req,res){
    try {
        Movie.find().exec(function (err, records) {
            res.send(JSON.stringify(records));
        });

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


function saveMovie(params) {
    const movie = new Movie(params);
    movie.save(function (err) {
        if (err) return err;
    });
    return movie
}

// Add a movie
exports.addMovie = function(req,res) {
    try {
        l_res = [];
        req.body.forEach(function (element) {
            l_res.push(saveMovie(element));
        });
        return res.send(JSON.stringify(l_res))
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
