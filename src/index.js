const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');


app.use(cors());
app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {
    res.send('Hello Woreeeeld!')
});
app.post('/', (req, res) => {
    res.send(req.body)
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});