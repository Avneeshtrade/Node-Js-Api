const readXlsxFile = require('read-excel-file/node')
const { Readable} = require('stream');

const uploadFunction = async (req,res) =>{

let {body:{target_address}} = req
let {buffer,size,originalname,encoding,mimetype} = req.file

const schema = {
  'Name': {
    prop: 'name',
    type: String
  },
  'Address': {
    prop: 'address',
    type: String
  }
}

let bfr = Readable.from(buffer)
const { rows, errors } = await readXlsxFile(bfr,{schema})

rows.forEach((row,i) => {
  row.include = i%3==0?true:false;
});
res.status(200).json({target_address,result:rows,error:errors});
}

module.exports = uploadFunction