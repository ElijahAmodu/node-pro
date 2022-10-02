const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = 1000;

app.use( bodyParser.urlencoded ({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
