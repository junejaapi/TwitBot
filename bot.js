console.log("The bot is starting");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = { q: 'nicole aniston', count: 100 };

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    console.log(data);
    console.log(data.statuses[0].text);
}




