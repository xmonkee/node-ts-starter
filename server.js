const path = require('path');
const express = require('express');

const app = express()
const root = path.resolve(__dirname, 'dist');

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('index.html', {root})
});

app.listen(3000, function() {
    console.log(root);
    console.log(__dirname);
    console.log('Listening');
});
