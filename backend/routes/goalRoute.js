const express = require('express')
const {setGoal , getGoal, updateGoal, deleteGoal} = require("../controller/goalController")

const router = express.Router()


router.post('/', setGoal ).get('/', getGoal)

router.put('/:id', updateGoal).delete('/:id', deleteGoal)

module.exports = router