var express = require('express');
var router = new express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
    return next(); 
  }
  res.redirect('/login');
}

/* GET users listing. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('user', { user: req.user });
});

module.exports = router;
