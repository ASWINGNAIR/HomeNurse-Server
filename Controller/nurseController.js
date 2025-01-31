// import nurses
const nurses = require('../Model/nurseModel')

// import jwt middleware
const jwt =require('jsonwebtoken')

// Nurse Register
exports.nurseRegister = async(req,res)=>{
    console.log('Inside nurse register');
    const { username, email, password, mobile, qualification, experience, specialization, description } = req.body
    console.log(username , email , password , mobile , qualification , experience , specialization , description);
         
        // Handle uploaded files
        const profile = req.files?.profile ? req.files.profile[0].filename : null
        const degCertificate = req.files?.degCertificate ? req.files.degCertificate[0].filename : null
        const expCertificate = req.files?.expCertificate ? req.files.expCertificate[0].filename : null    
       console.log(profile,degCertificate,expCertificate);

       
    try {
        const existingNurses = await nurses.findOne({email})
        if(existingNurses){
            res.status(406).json("Nurse already exists")
        }
        else{
            const newNurse = new nurses({
                username,
                email,
                password,
                mobile,
                qualification,
                experience,
                specialization,
                description,
                profile,
                degCertificate,
                expCertificate,
                
            })
            await newNurse.save()
            res.status(200).json(newNurse)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// Nurse Login
exports.nurseLogin=async(req,res)=>{
    const {email , password} = req.body
    console.log(email , password);

    try {
        const existingNurses = await nurses.findOne({email,password})
        if(existingNurses){
            const token = jwt.sign({userId:existingNurses._id},"secretkey")
            res.status(200).json({existingNurses,token})
        }
    } catch (error) {
        res.status(401).json(error)
    } 
}

// Get Nurse profile
exports.getNurseProfile=async(req ,res)=>{
    const userId = req.payload
    try {
        const nurseProfile = await nurses.find({_id:userId})
        res.status(200).json(nurseProfile)
    } catch (error) {
        res.status(401).json(error)
    }
}

// Get all nurse profiles
exports.getAllNurseProfile = async(req ,res)=>{
    try {
        const allProfile = await nurses.find()
        res.status(200).json(allProfile)
    } catch (error) {
        res.status(401).json(error)
    }
}  

// update nurse profile
exports.updateNurseProfileController=async(req,res)=>{
    const {id} = req.params
    const userId = req.payload

    const { username, email, password, mobile, qualification, experience, specialization, description } = req.body
    console.log(username , email , password , mobile , qualification , experience , specialization , description);

    const profile = req.files?.profile ? req.files.profile[0].filename : null
    console.log(profile);
    
    try {
        const existingNurses = await nurses.findByIdAndUpdate({_id:id},{
                username,
                email,
                password,
                mobile,
                qualification,
                experience,
                specialization,
                description,
                profile
        })
        await existingNurses.save()
        res.status(200).json(existingNurses)
    } catch (error) {
        res.status(401).json(error)
    }
}




