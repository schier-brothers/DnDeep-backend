const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var auth = require('./routes/auth');
var charactersRouter = require('./routes/characters');
require('dotenv').config();


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
   secret: process.env.COOKIE_SECRET,
   resave: true,
   saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', auth);
app.use('/characters',charactersRouter );

module.exports = app;
/*
app.get('/', function (req, res) {
   res.send('<a href="/auth/google">Sign In with Google</a> \n <a href="/logout">logout</a>');
})

var server = app.listen(8081, "127.0.0.1", function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
})*/