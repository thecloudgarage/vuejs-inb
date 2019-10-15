const express = require('express');
const Payee = require('../models/payee');
const auth = require('../middleware/authentication');


// create router
const router = express.Router();


// GET /api/payee
router.get('/', (request, response) => {

    const query = { myId: request.query.myId };

    Payee.find(query, (err, docs) => {	

        if (err) {

            const data = {
                message: 'Unable to get payee entries.',
            };

            response.status(500);
            response.json(data);
            return;

        }

        response.json(docs);
        console.log(docs);
    });

});


// GET /api/payee/:id
router.get('/:id', (request, response) => {

    const id = request.params.id;

    Payee.findById(id, (err, doc) => {

        if (err) {

            const data = {
                message: `Unable to get payee entry with id ${id}.`,
            };

            response.status(500);
            response.json(data);
            return;

        }

        if (!doc) {

            const data = {
                message: `No entry exists with id ${id}.`,
            };

            response.status(404);
            response.json(data);
            return;

        }

        response.json(doc);

    });

});


// POST /api/payee
router.post('/', (request, response) => {

    // validation rules
    request.checkBody('myId', 'Payee is required.').notEmpty();

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

        // create payee
        const payee = new Payee();
        payee.myId = request.body.myId;
        payee.payeeName = request.body.payeeName;
        payee.payeeEmail = request.body.payeeEmail;
        payee.payeeMobile = request.body.payeeMobile;
        payee.payeeBank = request.body.payeeBank;
        payee.payeeBranch = request.body.payeeBranch;
        payee.payeeAccountId = request.body.payeeAccountId;

        Payee.create(payee, (err, doc) => {

            if (err) {

                const data = {
                    message: `Payee entry already exists on ${date}.`,
                };

                response.status(409);
                response.json(data);
                return;

            }

            response.json(doc);

        });

    });

});


// DELETE /api/payee/:id
router.delete('/:id', (request, response) => {

    const id = request.params.id;

    Payee.findByIdAndRemove(id, (err, doc) => {

        if (err) {

            const data = {
                message: `Unable to delete payee entry with id ${id}.`,
            };

            response.status(500);
            response.json(data);
            return;

        }

        if (!doc) {

            const data = {
                message: `No entry exists with id ${id}.`,
            };

            response.status(404);
            response.json(data);
            return;

        }

        response.json(doc);

    });

});


// PUT /api/payee/:id
router.put('/:id', (request, response) => {

    const id = request.params.id;

    // validation rules
    request.checkBody('myId', 'Payee is required.').notEmpty();

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

        // create payee
        const payee = {};
        payee.myId = request.body.myId;
        payee.payeeName = request.body.payeeName;
        payee.payeeEmail = request.body.payeeEmail;
        payee.payeeMobile = request.body.payeeMobile;
        payee.payeeBank = request.body.payeeBank;
        payee.payeeBranch = request.body.payeeBranch;
        payee.payeeAccountId = request.body.payeeAccountId;        

        // set  options
        const options = {
            new: true,
        };

        Payee.findByIdAndUpdate(id, payee, options, (err, doc) => {

            if (err) {

                const data = {
                    message: `Unable to update payee entry with id ${id}.`,
                };

                response.status(500);
                response.json(data);
                return;

            }

            if (!doc) {

                const data = {
                    message: `No entry exists with id ${id}.`,
                };

                response.status(404);
                response.json(data);
                return;

            }

            response.json(doc);

        });

    });

});


// exports
module.exports = router;
