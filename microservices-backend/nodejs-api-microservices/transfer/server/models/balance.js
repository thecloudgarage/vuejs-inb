const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


// define schema
const balanceSchema = mongoose.Schema({
    myId: { type: String, required: true, unique: false },
    myAccountBalance: { type: Number, required: true, unique: false },
});


// create model
const Balance = mongoose.model('Balance', balanceSchema);


// exports
module.exports = Balance;
