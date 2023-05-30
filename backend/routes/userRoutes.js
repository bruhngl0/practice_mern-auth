const express = require('express')
const router = express.Router()

const {registerController, loginController, getMeController} = require("../controller/userController")


router.post('/', registerController)
router.post('/login', loginController)
router.get('/me' , getMeController)


module.exports = router