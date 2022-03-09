const express = require('express')
const router = express.Router()
const {    createCart,getCart, deleteCart, emptyCart, updateCart, getAllCart } = require('../controllers/cart.control')
const {   verifyTokenAndAdmin, verifyTokenOnlyAdmin, verifyToken } = require('../services/verifyToken')

router.post('/cart_menu',  verifyToken, createCart)
router.put('/cart_menu/:id', verifyTokenAndAdmin, updateCart)
router.get('/cart_menu/:id', verifyTokenAndAdmin, getCart)
router.get('/cart_menu', verifyTokenOnlyAdmin, getAllCart)
router.delete('/cart_menu/:id', verifyTokenAndAdmin, deleteCart)
// router.delete('/cart_menu', verifyTokenAndAdmin, emptyCart)



module.exports = router