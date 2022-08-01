const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Routes = require('./requestHandler')

app.use(express.static("./public/upload"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require('./db/connection')
app.use('/api',Routes)

module.exports = app
