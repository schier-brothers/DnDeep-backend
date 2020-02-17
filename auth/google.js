var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');
require('dotenv').config();

const SERVER_URL = 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.PORT;
const CALLBACK_URL = SERVER_URL + '/auth/google/callback';

passport.serializeUser(function (user, fn) {
  fn(null, user);
});

passport.deserializeUser(function (id, fn) {
  User.findOne({_id: id.doc._id}, function (err, user) {
    fn(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    // FIXME Debug line
    console.log('logged in!!!');
    User.findOrCreate({ userid: profile.id }, { name: profile.displayName, userid: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;