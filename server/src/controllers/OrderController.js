const OrderService = require('../services/OrderService')

const createOrder = async (req, res) => {
    try {
        const {phone, city, address, fullName, totalPrice, shippingPrice, itemsPrice, paymentMethod} = req.body
        if(!phone || !city || !address || !fullName || !totalPrice || !shippingPrice || !itemsPrice || !paymentMethod) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the input is required'
                
            })
        }

        const result = await OrderService.createOrder(req.body)
        return res.status(200).json(result)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getOrderDetails = async (req, res) => {
    try {
        const userId = req.params.id
        if(!userId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        }
        const response = await OrderService.getDetailsOrder(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const getOneOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.id
        if(!orderId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The orderId is required'
            })
        }
        const response = await OrderService.getOneDetailsOrder(orderId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const cancelOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.id
        const data = req.body
        if(!orderId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The orderId is required'
            })
        }
        const response = await OrderService.cancelDetailsOrder(orderId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllOrder = async (req, res) => {
    try {
        const response = await OrderService.getAllOrder()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createOrder,
    getOrderDetails,
    getOneOrderDetails,
    cancelOrderDetails,
    getAllOrder
}