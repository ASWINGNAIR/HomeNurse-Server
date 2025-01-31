// import express
const express = require('express')

// import userController
const userController = require('./Controller/userController')

// import nurseController
const nurseController = require('./Controller/nurseController')

// import profileController
const profileController = require('./Controller/profileController')

// import jwtMiddleware
const jwtMiddleware = require('./Middleware/jwtMiddleware')

// import multerConfig
const multerConfig = require('./Middleware/multerMiddleware')
const multer = require('multer')

// instance for router
const router = new express.Router()

// User REGISTER
router.post('/register',userController.register)

// User LOGIN
router.post('/login',userController.login)

// Nurse REGISTER
router.post('/nurseRegister',multerConfig.fields([
    { name: 'profile', maxCount: 1 },         // 1 image
    { name: 'degCertificate', maxCount: 1 }, // 1 degree certificate (PDF)
    { name: 'expCertificate', maxCount: 1 }, // 1 experience certificate (PDF)
]),nurseController.nurseRegister)

// Nurse LOGIN
router.post('/nurseLogin',nurseController.nurseLogin)

// get nurse profile
router.get('/nurse-profile',jwtMiddleware,nurseController.getNurseProfile)

// get all nurse profile
router.get('/allNurse-profile',jwtMiddleware,nurseController.getAllNurseProfile)

//  update nurse profile
router.put('/update-nurseProfile/:id',jwtMiddleware,multerConfig.fields([
    { name: 'profile', maxCount: 1 },         // 1 image
    { name: 'degCertificate', maxCount: 1 }, // 1 degree certificate (PDF)
    { name: 'expCertificate', maxCount: 1 }, // 1 experience certificate (PDF)
]),nurseController.updateNurseProfileController)



module.exports = router