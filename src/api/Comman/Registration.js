import mongoose from 'mongoose'

const regSchema = new mongoose.Schema({

    userName:{
        type: String
       
    },
    Password:{
        type: String
       
    },
    fullName:{
        type:String

    },
    Address:{
         type:String
    }

    
}, {
    timestamps: true
});

const model = mongoose.model('student', regSchema)


export default model