const express = require('express')
const router = express.Router()
const {    createOrder, getOrder, deleteOrder } = require('../controllers/order.control')


router.route('/main_order').get(getOrder).post(createOrder).delete(deleteOrder)



module.exports = router