console.log("The bot3 is starting");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var stream = T.stream('statuses/filter');

stream.on('locations',function(tweet) {
    console.log("I tweeted something");
})