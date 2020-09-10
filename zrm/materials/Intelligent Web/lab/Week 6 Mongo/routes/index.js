var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");


var character = require('../controllers/characters');
var initDB= require('../controllers/init');
initDB.init();


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'My Form' });
});

router.post('/index', character.getAge);

module.exports = router;
