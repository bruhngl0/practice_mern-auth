const express = require('express')
const {protect} = require('../middlewares/authMiddleware')
const {setGoal , getGoal, updateGoal, deleteGoal} = require("../controller/goalController")

const router = express.Router()


router.post('/', protect, setGoal ).get('/', protect, getGoal)

router.put('/:id', protect, updateGoal).delete('/:id', protect, deleteGoal)

module.exports = router