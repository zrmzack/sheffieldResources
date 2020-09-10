var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'My Form' });
});

router.post('/index', function(req, res, next) {
    let userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    } else if (!isNumeric(userData.year)) {
        res.status(403).send('Year is invalid!')
    }
    const year = (new Date()).getFullYear();
    userData.age = year - parseInt(userData.year);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(userData));
});

function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}




module.exports = router;
