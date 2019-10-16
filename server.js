const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require('./app/routes');


//mongoose.connect(configDB.url);

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ProductDB', { useNewUrlParser: true });


router(app);
app.listen(8080);

console.log('Started at 8080');
