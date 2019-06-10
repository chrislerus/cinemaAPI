const expect = require('chai').expect;

describe('Movie models', function () {
    it('should be invalid if name is empty', function (done) {
        var movie = new Movie();
        movie.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });

    it('should be valid if name only', function (done) {
        var data = {
            "name": "Pulp Fiction"
        };
        var movie = new Movie(data);
        movie.validate(function(err) {
            expect(err).to.not.exist;
            done();
        });
    });

    it('should be valid for basic info', function (done) {
        var data = {
            "name": "Pulp Fiction",
            "date_exp": 1559637543,
            "img_url": "https://www.ocs.fr/sites/default/files/" +
                "styles/alternative/public/programs/alternatives/PULP-FICTION-UMA.jpg"
        };
        var movie = new Movie(data);
        movie.validate(function(err) {
            expect(err).to.not.exist;
            done();
        });
    });
});


var Movie = require('../src/models/movie');
