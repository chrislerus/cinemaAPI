const chai = require('chai')
const chaiHttp = require('chai-http')
let server = require('../src/index');
const mongoose = require('mongoose');
const Movie = require('../src/models/movie')

mongoose.Promise = global.Promise;


chai.use(chaiHttp)
chai.should()


before(function (done) {

    const movie = new Movie({
        "name": "Pulp Fiction 1",
        "date_exp": 1559637543,
        "img_url": "random_url"
    });
    movie.save().then(() => done());
});


after(function (done) {
    mongoose.connection.db.dropDatabase(done);
    delete server;
});

describe("Basic routes", () => {

        beforeEach(function (done) {
            done();
        });

        describe("GET /api/movies", () => {
            it("should get all movies", (done) => {
                chai.request(server)
                    .get('/api/movies')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    })
            })
        });

        describe("GET /api/movies/:id", () => {
            it("should get one movie", (done) => {
                done();
            })
        });

        describe("POST /api/movies", () => {
            it("should create and store one movie", (done) => {
                chai.request(server)
                    .post('/api/movies')
                    .send({
                        "name": "Pulp Fiction Posted",
                        "date_exp": 1559637543,
                        "img_url": "https://www.ocs.fr/sites/default/files/styles/alternative/public/programs/alternatives/PULP-FICTION-UMA.jpg"
                    })
                    .end(function (err, res) {
                        res.should.have.status(200);
                        JSON.parse(res.text).should.have.property("_id");
                        Movie.countDocuments().exec(function (err, len) {
                            chai.assert.equal(len, 2);
                        });
                    });
                done();
            })
        });

        describe("POST /api/movies/:id", () => {
            it("should delete one movie", (done) => {
                done();
            })
        });
    }
);
