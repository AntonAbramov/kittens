var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pictures', { title: 'Pictures', menuActive: 'pictures' });
});

module.exports = router;
