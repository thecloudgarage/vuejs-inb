const express = require('express');
const Balance = require('../models/balance');

// create router
const router = express.Router();


// GET /api/balance
router.get('/', (request, response) => {

    const query = { myId: request.query.myId };

    Balance.find(query, (err, docs) => {

        if (err) {

            const data = {
                message: 'Unable to get balance entries.',
            };

            response.status(500);
            response.json(data);
            return;

        }

        response.json(docs);
        console.log(docs);
    });

});

// exports
module.exports = router;
