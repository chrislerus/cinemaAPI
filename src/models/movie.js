var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    name: { type: String},
    date_exp: Number,
    img_url: String
});

module.exports = mongoose.model('Movie', movieSchema);
