const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/OrderController')
const {authUserMiddleWare, authMiddleWare} = require('../middleware/authMiddleware')

router.post('/create',authUserMiddleWare,OrderController.createOrder)
router.get('/get-order-details/:id',authUserMiddleWare, OrderController.getOrderDetails)
router.get('/get-one-order-details/:id',authUserMiddleWare, OrderController.getOneOrderDetails)
router.delete('/cancel-order/:id',authUserMiddleWare, OrderController.cancelOrderDetails)
router.get('/get-all-order',authMiddleWare, OrderController.getAllOrder)






module.exports = router