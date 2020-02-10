var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<a href="/auth/google">Sign In with Google</a><a href="/logout">logout</a>');
});

module.exports = router;