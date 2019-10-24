const express = require('express');


// create router
const router = express.Router();


// GET /api
router.get('/', (request, response) => {
        response.status(200).end();
});

// exports
module.exports = router;
