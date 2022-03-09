const express = require('express')
const router = express.Router()
const { verifyTokenAndAdmin, verifyTokenOnlyAdmin,  verifyToken  } = require('../services/verifyToken')
const {  getAllOrder,  createOrder, getOrder, deleteOrder, updateOrder } = require('../controllers/order.control')


router.get('/main_order/:id', verifyTokenAndAdmin, getOrder )
router.post('/main_order', verifyTokenAndAdmin, createOrder)
router.get('/main_order', verifyTokenOnlyAdmin, getAllOrder)
router.put('/main_order/:id', verifyTokenOnlyAdmin, updateOrder)
router.delete('/main_order/:id', verifyTokenOnlyAdmin, deleteOrder)



module.exports = router