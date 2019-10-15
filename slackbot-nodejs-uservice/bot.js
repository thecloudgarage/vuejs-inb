/* This bot supports balance and transfers */
/* Finds email address of the slack user and queries mongo against that */
var SlackBot = require('slackbots'); // import slackbot library
var axios = require('axios');
var JSON = require('JSON');

/* Create Bot using My Slack Team API KEY */
var bot = new SlackBot({
    token: 'xoxb-735697899604-727772311010-Ik3oOtdJalMieXcZGKZ46fxe',
    name: 'testingpb'
});

exports.run = () => {
  bot.on('start', onStart);
  bot.on('message', onMessage);
}

var onStart = () => {
  console.log('Bot started');
  bot.postMessageToChannel('mybank', 'Hi, How can I help you');
}

var onMessage = (message) => {
  console.log(message);
  users = [];
  channels = [];
  var botUsers = bot.getUsers();
  users = botUsers._value.members;
  var botChannels = bot.getChannels();
  channels = botChannels._value.channels;
  if(message.type === 'message' && Boolean(message.text)) {
/* First we are deriving the channel ID and User ID and storing them as variables channel & usr */
    var channel = channels.find(channel => channel.id === message.channel);
    var usr = users.find(user => user.id === message.user);
/* Then we are verifying if the user who has messaged is not the bot itself */
/* In this case we are creating a variable called messagetext as a derived value of the message */
      var messagetext = message.text;
/* Then in case the message includes balance, then we lead ultimately to an execution of function named usrBalance(usrbalance) */
/* Notice how var name usrbalance is placed as variable inside the function name., ultimately leading to an export of the variable value to the function */
      if(messagetext.includes("balance")) {
        var usrbalance = users.find(user => user.id === message.user);
        usrBalance(channel,usrbalance);
/* Then in case the message includes transfers, then we lead ultimately to an execution of function named usrTxns(usrtxns) */
/* Notice how var name usrtxns is placed as variable inside the function name., ultimately leading to an export of the variable value to the function */
      } else if(messagetext.includes("transfers")) {
        var usrtxns = users.find(user => user.id === message.user);
        usrTxns(channel,usrtxns);
      }
  }
}

/* note how we are defining the function using var usrBalance = (usrBalance)., this is linking to the above call */
/* If we do not tie the function and variable names for above code and the below code., then it will result into an error*/
/* Also., one needs to understand that user.id represents a value set is expressed as a variable usrbalance in the above code */
/* if we append profile.email against that then we are deriving the email value */
var usrBalance = (channel,usrbalance) => {
    console.log(channel,usrbalance);
    axios.get('http://pb-balance-api.cfapps.io/balance/', {params: {myAccountId:usrbalance.profile.email}})
        .then(res => {
            var apirxdataset = res.data[0];
            var dataset = apirxdataset.myAccountBalance
            const balance = JSON.stringify(dataset);
            bot.postMessageToChannel(channel.name, `${balance}`);
        });
}

/* Most understanding remains the same as the above function, except that the returned dataset is an array */
/* To deal with that we are iteratively defining variables and methods to finally create a const txns that is posted back */
/* Also note when we use [] it represents an array */

var usrTxns = (channel,usrtxns) => {
    axios.get('http://pb-transfer-api.cfapps.io/transfer/', {params: {myAccountId:usrtxns.profile.email}})
        .then(res => {
            var apitxnset, x;
            var apitxnset = res.data;
            for (x in apitxnset) {
            const initialtxn = apitxnset[x];
            const txns = JSON.stringify(initialtxn);
            bot.postMessageToChannel(channel.name, `${txns}`);
          }
        });
}

/* In a nutshell, we are starting to export the two functions for bot.on, one is a greeting and another listens to incoming messages */
/* Then we use the first method to selectively filter incoming text and call respective functions that will be executed */
