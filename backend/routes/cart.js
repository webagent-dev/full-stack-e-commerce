const express = require('express')
const router = express.Router()
const {    createCart,getCart, deleteCart, emptyCart } = require('../controllers/cart.control')
const {   verifyTokenAndAdmin, verifyTokenOnlyAdmin, verifyToken } = require('../services/verifyToken')

router.post('/cart_menu',  verifyToken, createCart)
router.get('/cart_menu', verifyTokenAndAdmin, getCart)
router.delete('/cart_menu', verifyTokenAndAdmin, deleteCart)
router.delete('/cart_menu', verifyTokenAndAdmin, emptyCart)



module.exports = router