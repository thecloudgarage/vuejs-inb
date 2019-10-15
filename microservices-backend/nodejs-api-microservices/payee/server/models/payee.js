const mongoose = require('mongoose');


// define schema
const payeeSchema = mongoose.Schema({
    payeeName: { type: String, required: true, unique: false },
    myId: { type: String, required: true, unique: false },
    payeeMobile: { type: String, required: true, unique: false },
    payeeEmail: { type: String, required: true, unique: false },
    payeeBank: { type: String, required: true, unique: false },
    payeeBranch: { type: String, required: true, unique: false },
    payeeAccountId: { type: String, required: true, unique: false },
});


// create model
const Payee = mongoose.model('Payee', payeeSchema);


// exports
module.exports = Payee;
