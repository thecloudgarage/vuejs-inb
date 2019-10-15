const moment = require('moment');


function log(request, response, next) {

    // get user
    let user;
    if (request.user) {

        user = request.user.email;

    } else {

        user = 'none';

    }

    // get date
    const date = moment().format('MM-DD-YYYY hh:mm:ss A');

    // create log entry
    const message = `[${date}] (${user}) "${request.method} ${request.url}" ${JSON.stringify(request.body)}`;

    // log it
    console.log(message);

    // next middleware
    next();

}


// exports
exports.log = log;
