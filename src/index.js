const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000, () => {
    console.log('Up and running')
});

// Require external modules
const mongoose = require("mongoose");
// Connect to DB

mongoose.connect('mongodb://localhost/cinemas')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
