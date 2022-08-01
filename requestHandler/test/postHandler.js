const importExcelData2MySQL = require("../../utility/exceltoobject");
const { Readable} = require('stream');

const postFunction = async (req,res) =>{
  let arr = await importExcelData2MySQL(Readable.from(req.file.buffer));

  var result=[];
  for(var i = 0; i < arr.length; i++) {
    let obj = {};
    for(var j = 0; j <arr.length; j++) {
      if(i!=0 && arr[0][j])
        obj[`${arr[0][j]}`] = arr[i][j];
    }
    if(Object.keys(obj).length)
                  result.push(obj);
  }
  var temp = []
  for(let i=0;i<result.length;i++){
    let t = result[i];
    if(i%3==0)
      t[`isValid`] = true;
    else
      t[`isValid`] = false;
      temp.push(t);
  }
  res.status(200).json({
      result:temp
  })
}

module.exports = postFunction