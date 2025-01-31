// // import mongoose
// const mongoose=require('mongoose')

// // create ProfileSchema instance
// const profileSchema = new mongoose.Schema({
//     username:{
//         required : true,
//         type : String
//     },
//     email : {
//         required : true,
//         type : String,
//         unique : true
//     },
//     password : {
//         required : true,
//         type : String
//     },
//     description : {
//         required : true,
//         type : String
//     },
//     specialization : {
//         required : true,
//         type : String
//     },
//     qualification : {
//         required : true,
//         type : String
//     },
//     experience : {
//         required : true,
//         type : String 
//     },
//     mobile : {
//         required : true,
//         type : String
//     },
//     profile : {
//         required : true,
//         type : String
//     },
//     degCertificate : {
//         required : true,
//         type : String
//     },
//     expCertificate : {
//         required : true,
//         type : String
//     },
//     userId : {
//         required : true,
//         type : String
//     }
// })


// // create Model
// const profiles = mongoose.model("profiles",profileSchema)

// // export model
// module.exports = profiles