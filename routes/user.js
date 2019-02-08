
const express = require('express')
const router = express.Router()
const UserController = require('../controller/userController')


router.post('/googleSignUp', UserController.googleLogin)

router.post('/verify',UserController.tokenVerification)

module.exports = router