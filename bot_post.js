console.log("The bot2 is starting");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);


T.post('statuses/update', { status: '#junejaapi from node.js' }, function(err, data, response) {
    console.log(err);
    console.log(data);
    console.log(response);
  })