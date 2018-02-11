var twit = require('twit');
var config = require('./config');

var Twitter = new twit(config);

var messages = ["Hi @RKR2771, I'm a bot created by @raeveen_28. This account is monitored by him. :)"];
var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data);
        console.log(err);
        console.log(response);
    });
    messageLocation += 1;
}

setInterval(writeTweet, 15000);