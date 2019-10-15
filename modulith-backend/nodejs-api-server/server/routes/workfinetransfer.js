const express = require('express');
const Transfer = require('../models/transfer');
const auth = require('../middleware/authentication');
const moment = require('moment');

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

    // validation rules
    request.checkBody('myId', 'Transfer is required.').notEmpty();
    request.checkBody('date', 'Date is required.').notEmpty();
    request.checkBody('date', 'Date is invalid.').isDate();

    // validate
    request.getValidationResult().then((errors) => {

        // form errors
        if (!errors.isEmpty()) {

            const data = {
                errors: errors.useFirstErrorOnly().mapped(),
            };

            response.status(400);
            response.json(data);
            return;

        }

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

        Transfer.create(transfer, (err, doc) => {

            if (err) {
                const data = {
                    message: `Unable to Transfer`,
                };

                response.status(409);
                response.json(data);
                console.log(err);
                return;

            }

            response.json(doc);

        });

    });

});

// exports
module.exports = router;
