var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Exclusive Scottish Fold Kittens for Sale!',
    keywords: 'key words',
    contentType: 'test description',
    menuActive: 'home' });
});

module.exports = router;
