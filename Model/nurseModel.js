// import mongoose
const mongoose=require('mongoose')

// create nurseSchema instance
const nurseSchema = new mongoose.Schema({
    username:{
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String,
        unique : true
    },
    password : {
        required : true,
        type : String
    },
    description : {
        type : String
    },
    specialization : {
        type : String
    },
    qualification : {
        type : String
    },
    experience : {
        type : String 
    },
    mobile : {
        type : String
    },
    linkedin : {
        type : String
    },
    whatsapp : {
        type : String
    },
    profile : {
        type : String
    },
    degCertificate : {
        type : String
    },
    expCertificate : {
        type : String
    }
})


// create Model
const nurses = mongoose.model("nurses",nurseSchema)

// export model
module.exports = nurses