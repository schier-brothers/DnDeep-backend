var express = require('express');
var router = express.Router();
var passportGoogle = require('../auth/google');

/* LOGIN ROUTER */
router.get('/login', function(req, res, next) {
    res.redirect('/loginGoogle');
});

  /* LOGOUT ROUTER */
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

  /* GOOGLE ROUTER */
router.get('/google',
passportGoogle.authenticate('google', { scope: 'openid profile' }));

router.get('/google/callback',
passportGoogle.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/');
});

module.exports = router;