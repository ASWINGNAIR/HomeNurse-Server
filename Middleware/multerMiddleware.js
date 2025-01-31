// import multer
const multer = require('multer')


// diskStorage -> 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './Uploads');
    },
    filename: (req, file, callback) => {
        const filename = `${file.originalname}-${Date.now}-${file.originalname}`
        callback(null, filename)
    }
})


// file filter
const fileFilter = (req, file, callback) => {
    if (file.fieldname === 'profile') {
        // Allow only image files for 'profile'
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            callback(null, true)
        } else {
            callback(null, false)
            return callback(new Error('Only png, jpeg, jpg files are allowed for profile image.'))
        }
    } else if (file.fieldname === 'degCertificate' || file.fieldname === 'expCertificate') {
        // Allow only PDF files for certificates
        if (file.mimetype === 'application/pdf') {
            callback(null, true)
        } else {
            callback(null, false)
            return callback(new Error('Only PDF files are allowed for certificates.'));
        }
    } else {
        callback(null, false)
        return callback(new Error('Invalid file field.'))
    }
}


// multer configuration
const multerConfig = multer({
    storage,
    fileFilter
})



module.exports = multerConfig