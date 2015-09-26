var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('videos', {title: 'videos', menuActive: 'videos'});
});

module.exports = router;
