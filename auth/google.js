var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.serializeUser(function (user, fn) {
  fn(null, user);
});

passport.deserializeUser(function (id, fn) {
  User.findOne({_id: id.doc._id}, function (err, user) {
    fn(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: "321138157267-llg1g0qv2kpp5lrg43sablqeot01libh.apps.googleusercontent.com",
    clientSecret: "g8uRU_yMjyQpGTYsdBuxY_y7",
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // FIXME Debug line
    console.log("logged in!!!");
    User.findOrCreate({ userid: profile.id }, { name: profile.displayName, userid: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;