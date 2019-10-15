const express = require('express');
const Transfer = require('../models/transfer');
const auth = require('../middleware/authentication');
const moment = require('moment');
const Balance = require('../models/balance');
// create router
const router = express.Router();


// GET /api/transfer
router.get('/', (request, response) => {

    const query = { myId: request.query.myId };

    Transfer.find(query, (err, docs) => {

        if (err) {

            const data = {
                message: 'Unable to get transfer entries.',
            };

            response.status(500);
            response.json(data);
            return;

        }

        response.json(docs);
        console.log(docs);
    });

});


// POST /api/transfer
router.post('/', (request, response) => {

        // create transfer
        const transfer = new Transfer();
        transfer.date = request.body.date;
        transfer.myId = request.body.myId;
        transfer.payeeName = request.body.payeeName;
        transfer.payeeEmail = request.body.payeeEmail;
        transfer.payeeMobile = request.body.payeeMobile;
        transfer.payeeBank = request.body.payeeBank;
        transfer.payeeBranch = request.body.payeeBranch;
        transfer.payeeAccountId = request.body.payeeAccountId;
        transfer.payeeTransferAmount = request.body.payeeTransferAmount;


        Transfer.create(transfer).then(function(getbalance){
                var transferamount = parseFloat(transfer.payeeTransferAmount);
                var myId = transfer.myId;
                const balance = new Balance();
                Balance.find(myId).then(function(updatebalance){
                var currentbalance = parseFloat(updatebalance.balance);
                var updatebalance = currentbalance - transferamount;
                const balance1 = new Balance();
		Balance.findByIdAndUpdate(myId, { myAccountBalance : transferamount }, {new: true});
                });
});
});


// exports
module.exports = router;
