import mongoose from 'mongoose'

const flightSchema = new mongoose.Schema({

    UserName:{
        type: String
       
    },
    Password:{
        type: String
       
    }
    
    
    
    
}, {
    timestamps: true
});

const model = mongoose.model('Addflightdetails', flightSchema)



export default model