var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var request = require('request');

/**
 *  GET home page.
 */
router.get('/index', function (req, res, next) {
    res.render('index', {title: 'My Form'});
});

/**
 * post to the home page
 */
router.post('/index', function (req, res, next) {
    let userDataArray = req.body;
    // Set the headers
    let headers = {
        'User-Agent': 'me me me',
        'Content-Type': 'application/json'
    };
    // Configure the request
    let options = {
        url: 'http://localhost:3001/index',
        method: 'POST',
        headers: headers,
    }

    let counter = 0;
    for (let index in userDataArray) {
        options.json = userDataArray[index];
        // Start the request
        request(options,
            function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    userDataArray[counter] = body;
                    // Print out the response body
                    if (++counter >= userDataArray.length) {
                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(userDataArray));
                    }
                }

            });
    }
});


module.exports = router;
