
const asyncHandler = require("express-async-handler")

const Goal = require("../models/goalModel")



const getGoal = asyncHandler(async(req,res)=>{
   let goal =  await Goal.find()
   res.status(200).json(goal)
})

const setGoal = asyncHandler(async(req,res)=>{

   if (!req.body.text){
        res.status(400)
        throw new Error("input a text field")
    }
   let newGoal = await Goal.create(req.body)
   res.status(200).json(newGoal)
})

 const updateGoal = asyncHandler(async(req,res)=>{
  if(!req.params.id){
    res.status(400)
    throw new Error("id not found")
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

   await Goal.findByIdAndDelete(req.params.id)
   res.json({id : req.params.id})
})

module.exports =  {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}