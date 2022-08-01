const multer = require('multer');
const { __basedir } = require('../config');


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//     cb(null, __basedir)
//     },
//     filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
//     }
//     });
  
   const storage = multer.memoryStorage();

  const upload = multer({storage: storage});

module.exports = upload;