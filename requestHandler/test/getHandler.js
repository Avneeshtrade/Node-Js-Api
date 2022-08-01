const _ = require('lodash');

const getFunction = (req,res) =>{
  let body = req.body;
  if(body && body.input_address){
    let kwArray= body.input_address.split(' ')
    let length = kwArray.length;
    let result = {
      keyword_address: []
    }
    let chunk_elements;
    if(length >= 3){
      chunk_elements =  _.chunk(kwArray,3)
    }else if(length >= 2){
        chunk_elements =  _.chunk(kwArray,2)
    }
    else if(length == 1){
      chunk_elements =  _.chunk(kwArray,2)
    }
    result.keyword_address = chunk_elements;
    res.status(200).json(result)
  }
  else{
    res.status(404).json({"message":"data not found"});
  }
}

module.exports = getFunction