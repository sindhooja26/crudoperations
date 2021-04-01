import mongoose, { Mongoose } from 'mongoose'

 const LoginSchema =new Mongoose.Schema({
      userName:{
          type: String
      },
      passWord:{
          type:String
      }
    },{
        timestamp:true
 });
 const model= mongoose.model('logindetails',LoginSchema)

 export default model