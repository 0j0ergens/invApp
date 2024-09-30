
const express = require('express');
app = express();
 
app.get('/', function (req, res) {
    res.send('Hello world'); 
});
 
app.listen(4000, function () {
    console.log('http://localhost:4000/');
});



