const Order = require("../models/OrderProduct")
const Product = require("../models/ProductModel")
const EmailService = require("../services/EmailService")

const createOrder = (newOrder) => {
    return new Promise(async(resolve, reject) => {
        const {phone, city, address, fullName, totalPrice, shippingPrice, itemsPrice, paymentMethod, orderItems, user, isPaid, paidAt, email} = newOrder
        try {
            const promises = orderItems.map(async(order) => {
 
                const productData = await Product.findOneAndUpdate({
                   _id: order.product,
                   countInStock: {$gte: order.amount}
                },
            {
                $inc: {
                    countInStock: -order.amount,
                    selled: +order.amount
                }
            },
            {new: true})
            if(productData){
                const newOrder = await Order.create({
                    orderItems,
                    shippingAddress: {
                        fullName,
                        address,
                        city,
                        phone
                    },
                    paymentMethod,
                    itemsPrice,
                    shippingPrice,
                    totalPrice,
                    user: user,
                    isPaid, paidAt
                })
            
            if(newOrder) {
                await EmailService.sendEmailCreateOrder(email, orderItems)
                return{
                    status:'OK',
                    message: 'SUCCESS',
                }
            }
        }else{
                return{
                    status:'OK',
                    message: 'ERR',
                    id: order.product
                }
            }
            })
            const results = await Promise.all(promises)
            const newData = results && results.filter((item) => item.id )
            if(newData.length) {
                const arrId = []
                newData.forEach((item) => {
                    arrId.push(item.id)
                })
                resolve({
                    status: 'ERR',
                    message: `san pham voi id ${arrId.join(',')} khong du hang`
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS'
            });
        } catch (e) {
            // console.log('e',e)
            reject(e)
        }
    })
}


const getDetailsOrder = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
           const order = await Order.find({
                user: id
           })
            if(order === null){
                resolve({
                    status: 'ERR',
                    message: 'The order is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'get detail order suscess',
                data: order
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getOneDetailsOrder = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
           const order = await Order.findById({
                _id: id
           })
            if(order === null){
                resolve({
                    status: 'ERR',
                    message: 'The order is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: order
            })
        } catch (e) {
            reject(e)
        }
    })
}

const cancelDetailsOrder = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let order = []
            const promises = data.map(async(order) => {
 
                const productData = await Product.findOneAndUpdate({
                   _id: order.product,
                   selled: {$gte: order.amount}
                },
            {
                $inc: {
                    countInStock: +order.amount,
                    selled: -order.amount
                }
            },
            {new: true})
            if(productData){
                 order = await Order.findByIdAndDelete(id)

            if(order === null){
                resolve({
                    status: 'ERR',
                    message: 'The order is not defined'
                })
            }
        }else{
                return{
                    status:'OK',
                    message: 'ERR',
                    id: order.product
                }
            }
            })
            const results = await Promise.all(promises)
            const newData = results && results.filter((item) => item)
            if(newData.length) {
                resolve({
                    status: 'ERR',
                    message: `san pham voi id ${newData.join(',')} khong ton tai`
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: order
            });

        } catch (e) {
            reject(e)
        }
    })
}

const getAllOrder = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const allOrder = await Order.find()

            resolve({
                status: 'OK',
                message: 'get all order susscess',
                data: allOrder
            })
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    createOrder,
    getDetailsOrder,
    getOneDetailsOrder,
    cancelDetailsOrder,
    getAllOrder
}