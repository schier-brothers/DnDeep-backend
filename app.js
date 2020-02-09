const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();

mongoose.connect('mongodb://localhost/test', function(err) {
    if(err) throw err;
    console.log('Successfully connected to database!');
})

app.use(logger('dev'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, "127.0.0.1", function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
})