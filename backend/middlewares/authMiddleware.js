
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const protect = asyncHandler(async(req,res,next) =>{
    let token;
        try {

            if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

                token = req.headers.authorization.split(' ')[1]

                let decoded = await jwt.verify(token, process.env.PVT_KEY)

                req.user = await User.findById(decoded.id).select('-password')

                next()

            }
        
        } catch (error) {
            console.log(error)
            res.status(400)
            throw new Error ("not authorized")
        
        }

        if(!token){
            res.status(400)
            throw new Error('no token, not authorized')
        }

    

   
})

module.exports = {protect}