// import mongoose
const mongoose = require('mongoose')

// create an instance of model ie define userSchema
const userSchema = new mongoose.Schema({
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
    }
})

// create model
const users = mongoose.model("users",userSchema)

// export model
module.exports = users