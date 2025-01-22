// import express
const express = require('express')

// import userController
const userController = require('./Controller/userController')

// instance for router
const router = new express.Router()

// REGISTER
router.post('/register',userController.register)


module.exports = router