const express = require('express')
const router = express.Router()
const {    register,login } = require('../controllers/auth.control')

router.post('/register_new_user', register)
router.post('/login_user', login)

module.exports = router