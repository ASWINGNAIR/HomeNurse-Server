// // import profiles
// const profiles = require('mongoose')

// // import jwt middleware
// const jwt =require('jsonwebtoken')



// add nurse profile
// exports.addProfileController = async (req, res) => {
//     const userId = req.payload
//     const { 
        // username, 
        // email, 
        // password, 
        // mobile, 
        // qualification, 
        // experience, 
        // specialization, 
        // description 
//     } = req.body

    // // Handle uploaded files
    // const profile = req.files?.profile ? req.files.profile[0].filename : null
    // const degCertificate = req.files?.degCertificate ? req.files.degCertificate[0].filename : null
    // const expCertificate = req.files?.expCertificate ? req.files.expCertificate[0].filename : null


//     try {
//         const existingNurses = await nurses.findByIdAndUpdate(userId,{
            // username,
            // email,
            // password,
            // mobile,
            // qualification,
            // experience,
            // specialization,
            // description,
            // profile,
            // degCertificate,
            // expCertificate,
//         },{new:true})
//         await existingNurses.save()
//         res.status(200).json(existingNurses)
//     } catch (error) {
//         res.status().json(error)
//     }
// }

// exports.addProfileController = async (req, res) => {
//     const userId = req.payload
//     const { 
//         username, 
//         email, 
//         password, 
//         mobile, 
//         qualification, 
//         experience, 
//         specialization, 
//         description,
//     } = req.body

//     // Handle uploaded files
//     const profile = req.files?.profile ? req.files.profile[0].filename : null
//     const degCertificate = req.files?.degCertificate ? req.files.degCertificate[0].filename : null
//     const expCertificate = req.files?.expCertificate ? req.files.expCertificate[0].filename : null

//     try {
//         const existingProfiles = await profiles.findOne({email})
//         if(existingProfiles){
//             res.status(406).json("Profile already exists")
//         }
//         else{
//             const newProfile = new profiles({
//                 userId,
//                 username,
//                 email,
//                 password,
//                 mobile,
//                 qualification,
//                 experience,
//                 specialization,
//                 description,
//                 profile,
//                 degCertificate,
//                 expCertificate,
//             })
//             newProfile.save()
//             await res.status(200).json(newProfile)
//         }
//     } catch (error) {
//         res.status(401).json({ error: error.message })
//     }
// }


// get nurse Profile
// exports.getNurseProfileController = async(req,res)=>{
//     const userId = req.payload
//     try {
//         const nurseProfile = await nurses.find(userId)
//         res.status(200).json(nurseProfile)
//     } catch (error) {
//         res.status(401).json(error)
//     }
// }
    
