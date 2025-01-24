// import users
const users = require('../Model/userModel')

// import jwt
const jwt = require('jsonwebtoken')

// User Register
exports.register =async (req , res)=>{
    console.log('Inside register function');
    const {username , email , password} = req.body
    console.log(username , email , password);
    
    try {
        const existingUsers =await users.findOne({email})
        if(existingUsers){
            res.status(406).json("User already exists")
        }
        else{
            const newUser = new users({
                username,
                email,
                password
            })
            newUser.save()
            await res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}


// User Login
exports.login=async(req , res)=>{
    const {email , password} = req.body
    console.log(email,password);
    
    try {
        const existingUsers =await users.findOne({email,password})
        if(existingUsers){
            const token =jwt.sign({userId:existingUsers._id},"secretkey")
            res.status(200).json({existingUsers,token})
        }
    } catch (error) {
        res.status(401).json(error)
    }
} 