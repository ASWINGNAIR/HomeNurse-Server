// import nurses
const nurses = require('../Model/nurseModel')

// import jwt middleware
const jwt =require('jsonwebtoken')

// Nurse Register
exports.nurseRegister = async(req,res)=>{
    console.log('Inside nurse register');
    const {username , email , password} = req.body
    console.log(username , email , password);
    
    try {
        const existingNurses = await nurses.findOne({email})
        if(existingNurses){
            res.status(406).json("Nurse already exists")
        }
        else{
            const newNurse = new nurses({
                username,
                email,
                password
            })
            newNurse.save()
            await res.status(200).json(newNurse)
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

