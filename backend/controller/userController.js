const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const registerController = asyncHandler(async(req,res)=>{

    //check if the inputd are filled
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("fill in the inputs")
    }

    //check if user already exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("user already exists")
    }

    //password hash

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    
    if(user){
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        })

    }
    else{
        res.status(400)
        throw new Error("user not registered")
    }
})

const loginController = asyncHandler(async(req,res)=> {
    const {email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("fill all the inputs")
    }

    //check if the email exists?
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(400).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        })
    }
    else{
        res.status(400)
        throw new Error("invalid credentails")
    }

  
})

const getMeController = (req,res)=>{
    res.status(200).json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    })
}


const generateToken = (id)=>{
    return jwt.sign({ id }, process.env.PVT_KEY, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerController,
    loginController,
    getMeController,
}