var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kittens', { title: 'Kittens', menuActive: 'kittens' });
});

router.get('/simba', function(req, res, next) {
  res.render('kittens/simba', { title: 'Simba' });
});

router.get('/gray', function(req, res, next) {
  res.render('kittens/gray', { title: 'Gray' });
});

router.get('/monika', function(req, res, next) {
  res.render('kittens/monika', { title: 'Monika' });
});

router.get('/big', function(req, res, next) {
  res.render('kittens/big', { title: 'Big' });
});

module.exports = router;
