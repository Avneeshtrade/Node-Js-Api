const Router = require('express').Router()
const test = require('./test');

Router.use('/test',test)


module.exports = Router