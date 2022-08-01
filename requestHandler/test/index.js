var getFunction= require('./getHandler')
// var postHandler=require('./postHandler')
// var deleteHandler=require('./deleteHandler')
// var putHandler=require('./putHandler')
const upload = require('../../utility/multer')
const uploadFunction = require('./uploadHandler')
const Router = require('express').Router()


Router.post('/find_keyword_address',getFunction);
// Router.post('/filter',upload.single("uploadfile"),postHandler);
Router.post('/find_selected_address',upload.single("file"),uploadFunction);
// Router.delete('/delete/:id',deleteHandler);
// Router.put('/put/:id',putHandler);

module.exports = Router