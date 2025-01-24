// import express
const express = require('express')

// import userController
const userController = require('./Controller/userController')

// import nurseController
const nurseController = require('./Controller/nurseController')

// instance for router
const router = new express.Router()

// User REGISTER
router.post('/register',userController.register)

// User LOGIN
router.post('/login',userController.login)

// Nurse REGISTER
router.post('/nurseRegister',nurseController.nurseRegister)

// Nurse LOGIN
router.post('/nurseLogin',nurseController.nurseLogin)

module.exports = router