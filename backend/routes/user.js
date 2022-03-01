const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAndAdmin, verifyTokenOnlyAdmin  } = require('../services/verifyToken')
const {  getUser, updateUser, deleteUser, userStat } = require('../controllers/user.control')

router.get('/main_user',  getUser)
router.put('/main_user/:id', verifyTokenAndAdmin,  updateUser)
router.delete('/main_user/:id', verifyTokenAndAdmin, deleteUser)
router.get('/stat', userStat)

module.exports = router
