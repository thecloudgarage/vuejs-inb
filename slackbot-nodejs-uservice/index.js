var slackbot = require('./bot'); // import slackbot library
var mongoose = require('mongoose');  // import mongoose library for accessing MongoDB
var http = require('http');
http.createServer((req, res) => {}).listen(8080);

/* Create MongoDB Connection */
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://mongodb.thecloudgarage.com:27017/personal_banking', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

slackbot.run();
