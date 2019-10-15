const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


// define schema
const transferSchema = mongoose.Schema({
    date: { type: Date, required: true, unique: false },
    payeeName: { type: String, required: true, unique: false },
    myId: { type: String, required: true, unique: false },
    payeeMobile: { type: String, required: true, unique: false },
    payeeEmail: { type: String, required: true, unique: false },
    payeeBank: { type: String, required: true, unique: false },
    payeeBranch: { type: String, required: true, unique: false },
    payeeAccountId: { type: String, required: true, unique: false },
    payeeTransferAmount: { type: Number, required: true, unique: false },
});


// create model
const Transfer = mongoose.model('Transfer', transferSchema);


// exports
module.exports = Transfer;
