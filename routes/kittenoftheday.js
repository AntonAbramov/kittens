var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kittenoftheday', { title: 'kittenoftheday', menuActive: 'kittenoftheday' });
});

module.exports = router;
