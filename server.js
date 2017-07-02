"use strict"

const express = require ('express');
const app = express();
const path = require('path');

// Middleware to define folder for static files
app.use(express.static('public'))

//Define main Route
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function () {
 console.log('Server listening on port 3000')
});

