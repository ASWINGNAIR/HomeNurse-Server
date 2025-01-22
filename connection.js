// import mongoose
const mongoose = require('mongoose')


// connect MongoDB with Server
connectionString = process.env.DATABASE
mongoose.connect(connectionString).then((res)=>{
    console.log(`MongoDB connected Successfully`);
}).catch((err)=>{
    console.log(`MongoDB connection Failed ${err}`);
})