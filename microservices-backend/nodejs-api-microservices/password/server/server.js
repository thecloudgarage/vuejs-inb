const bodyparser = require('body-parser');
const validator = require('express-validator');
const mongoose = require('mongoose');
const password = require('./routes/password');
const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const cors = require('cors');


// create application
const app = express();

// load env variables
dotenv.config();


// create database
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });


// app settings
app.set('json spaces', 4);


// middleware
app.use(helmet());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(logger.log);
app.use(validator());


// password route
app.use('/api/password', password);

// start application
app.listen(process.env.PORT, () => {

    console.log('Server listening on port %s.', process.env.PORT);

});
