var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var bcrypt = require('bcryptjs');

//The URL which will be queried. Run "mongod.exe" for this to connect
//var url = 'mongodb://localhost:27017/test';
var mongoDB = 'mongodb://localhost:27017/characters';

mongoose.Promise = global.Promise;
try {
    connection = mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        checkServerIdentity: false,
    });
    console.log('connection to mongodb worked!');

// db.dropDatabase();

//  MORE GENERAL WAY WOULD BE TO CALL:
// try {
//     var connection = mongoose.createConnection(mongoDB);
//     console.log("connection to mongodb worked!");
// }catch (e) {
// console.log('error in db connection: ' +e.message)
// }
//
// WHICH WOULD ALLOW MULTIPLE CONNECTIONS


} catch (e) {
    console.log('error in db connection: ' + e.message);
}
