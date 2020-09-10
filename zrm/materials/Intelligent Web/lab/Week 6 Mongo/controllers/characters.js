var Character = require('../models/characters');

exports.getAge = function (req, res) {
    var userData = req.body;
    if (userData == null) {
        res.status(403).send('No data sent!')
    }
    try {
        Character.find({first_name: userData.firstname, family_name: userData.lastname},
            'first_name family_name dob age',
            function (err, characters) {
                if (err)
                    res.status(500).send('Invalid data!');
                var character =null;
                if (characters.length>0) {
                    var firstElem = characters[0];
                    character = {name: firstElem.first_name, surname: firstElem.family_name,
                        dob: firstElem.dob, age: firstElem.age};
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(character));
            });
    } catch (e) {
        res.status(500).send('error '+ e);
    }

}