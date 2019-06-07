const boom = require('boom');
const Movie = require('../models/movie');


// Get all movies
exports.getMovies = function(req,res){
    try {
        const movies = Movie.find();
        res.send(JSON.stringify(movies.exec()));
    } catch (err) {
        throw boom.boomify(err)
    }
};
// Get single movie by ID
exports.getSingleMovie = function(req,res) {
    try {
        const id = req.params.id;
        const movie = Movie.findById(id);

        return movie
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Add a movie
exports.addMovie = function(req,res) {
    try {
        console.log(req.body);
        const movie = new Movie(req.body);
        movie.save();
        return res.send(JSON.stringify(movie))
    }
    catch (err) {
        throw boom.boomify(err)
    }
};


// Update an existing movie
exports.updateMovie = function(req,res) {
    try {
        const id = req.params.vm.runInDebugContext();
        const movie = req.body;
        const {...updateData} = movie;
        const update = Movie.findByIdAndUpdate(id, updateData, {new: true});
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
};

// Delete movie
exports.deleteMovie = function(req,res) {
    try {
        const id = req.params.id;
        const movie = Movie.findByIdAndRemove(id);
        return movie
    } catch (err) {
        throw boom.boomify(err)
    }

};
