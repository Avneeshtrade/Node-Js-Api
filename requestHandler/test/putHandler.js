const putFunction = (req,res) =>{
    res.status(200).json({
      message:"Ok",
      payload:{
        id:1,
        name:"manju"
      }
    })
  }
  
  module.exports = putFunction