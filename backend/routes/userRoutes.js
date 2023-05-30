const express = require('express')
const router = express.Router()
const {protect} = require("../middlewares/authMiddleware")
const {registerController, loginController, getMeController} = require("../controller/userController")


router.post('/', registerController)
router.post('/login', loginController)
router.get('/me' ,protect, getMeController)


module.exports = router