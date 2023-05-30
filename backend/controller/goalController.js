
const asyncHandler = require("express-async-handler")

const Goal = require("../models/goalModel")
const User = require("../models/userModel")



const getGoal = asyncHandler(async(req,res)=>{
   let goal =  await Goal.find({user: req.user.id})

   if(!goal){
    res.status(400)
    throw new Error("not authorized")
   }

   res.status(200).json(goal)
})

const setGoal = asyncHandler(async(req,res)=>{

   if (!req.body.text){
        res.status(400)
        throw new Error("input a text field")
    }

   let newGoal = await Goal.create({
    user: req.user.id,
    text: req.body.text
  })
   res.status(200).json(newGoal)
})

 const updateGoal = asyncHandler(async(req,res)=>{

  const goal = await Goal.findById(req.params.id)
  if(!goal){
    res.status(400)
    throw new Error("id not found")
  }



  const user = await User.findById(req.user.id)
  if(!user){
    res.status(400)
    throw new Error("not authorized")
  }

  if(goal.user.toString() != user.id){
    res.status(401)
    throw new Error('not authorized')
  }

  let updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
    new:true,
  })
  res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async(req,res)=>{

    let goal = await Goal.findById(req.params.id)
    if(!goal){
    res.status(400)
    throw new Error("id not found")
   }

   const user = await User.findById(req.user.id)
  if(!user){
    res.status(400)
    throw new Error("not authorized")
  }

  if(goal.user.toString() != user.id){
    res.status(401)
    throw new Error('not authorized')
  }

   await Goal.findByIdAndDelete(req.params.id)
   res.json({id : req.params.id})
})

module.exports =  {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}