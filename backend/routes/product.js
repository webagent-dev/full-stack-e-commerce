const express = require('express')
const router = express()
const { verifyTokenAndAdmin, verifyTokenOnlyAdmin,  verifyToken  } = require('../services/verifyToken')
const {    createProduct, getSingleProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product.control')

router.get('/main_product',  getProduct)
router.post('/main_product', verifyTokenOnlyAdmin, createProduct)
router.get('/main_product/:id', getSingleProduct)
router.put('/main_product/:id', verifyTokenOnlyAdmin, updateProduct)
router.delete('/main_product/:id',  verifyTokenOnlyAdmin, deleteProduct)


module.exports = router 