// import dotenv
require('dotenv').config()

// import connection
require('./connection')

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import router
const router = require('./router')

// create Server
const cpServer = express()

// server using cors
cpServer.use(cors())

// parse the data -> middleware to parse the data
cpServer.use(express.json())

// exporting uploaded folder
cpServer.use('/upload',express.static('./Uploads'))

// use router
cpServer.use(router)

// create PORT
const PORT = 4000 || process.env.PORT

// Listen to the PORT
cpServer.listen(PORT,()=>{
    console.log(`cpServer is running successfully in PORT number ${PORT}`); 
})



