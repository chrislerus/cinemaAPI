var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    date_exp: Number,
    img_url: String,
    origin: String
});

module.exports = mongoose.model('Movie', movieSchema);
