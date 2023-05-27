const mongoose = require('mongoose')


const connectDB = async(req,res)=>{
    try{
  const conn = await mongoose.connect(process.env.ATLAS_URI)
  console.log(`connected to the database ${conn.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB