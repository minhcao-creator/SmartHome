const express = require('express')

const router = express.Router()

const verifyToken = require('../middleware/auth')

const UserController = require('../controllers/userController')

router.post('/register', UserController.resgiter)
router.post('/login', UserController.login)
router.get('/profile', verifyToken, UserController.profile)

module.exports = router