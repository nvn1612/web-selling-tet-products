const Product = require("../models/ProductModel")
const createProduct = (newUser) => {
    return new Promise(async(resolve, reject) => {
        const {name, image, type, price, countInStock, rating, description} = newUser
        try {
            const checkProduct = await Product.findOne({
                name: name
            })
            if(checkProduct !== null)
                {
                    resolve({
                        status: 'OK',
                        message: 'The name of product is already'
                    })
                }
            const newProduct = await Product.create({
                name,
                image,
                type, 
                price, 
                countInStock, 
                rating, 
                description
            })

        if(newProduct) {
            resolve({
                status:'OK',
                message: 'SUCCESS',
                data: newProduct
            })
        }
        } catch (e) {
            reject(e)
        }
    })
}

const updateProduct = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const idValue = typeof id === 'object' ? id.id : id;
            const checkProduct = await Product.findOne({
                _id: idValue
            })
            if(checkProduct === null){
                resolve({
                    status: 'OK',
                    message: 'The product is not defined'
                })
            }
            const updateProduct = await Product.findByIdAndUpdate(idValue, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateProduct
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async(resolve, reject) => {
        try {
            const totalProduct = await Product.countDocuments();
            if(filter) {
                const label = filter[0];
                const allObjectFilter = await Product.find({[label]: {'$regex': filter[1]}}).limit(limit).skip(page*limit)
                resolve({
                    status: 'OK',
                    message: 'get all product susscess',
                    data: allObjectFilter,
                    total: totalProduct,
                    pageCurrent: page + 1,
                    totalPage: Math.ceil(totalProduct / limit)
                })
            }
            if(sort){
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allProductSort = await Product.find().limit(limit).skip(page*limit).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'get all product susscess',
                    data: allProductSort,
                    total: totalProduct,
                    pageCurrent: page + 1,
                    totalPage: Math.ceil(totalProduct / limit)
                })
            }
            const allProduct = await Product.find().limit(limit).skip(page*limit)
            resolve({
                status: 'OK',
                message: 'get all product susscess',
                data: allProduct,
                total: totalProduct,
                pageCurrent: page + 1,
                totalPage: Math.ceil(totalProduct / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsProduct = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const idValue = typeof id === 'object' ? id.id : id;
            const product = await Product.findOne({
                _id: idValue
            })
            if(product === null){
                resolve({
                    status: 'OK',
                    message: 'The product is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'get detail product susscess',
                data: product
            })
        } catch (e) {
            reject(e)
        }
    })
}
const deleteProduct = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const idValue = typeof id === 'object' ? id.id : id;
            const checkProduct = await Product.findOne({
                _id: idValue
            })
            if(checkProduct === null){
                resolve({
                    status: 'OK',
                    message: 'The product is not defined'
                })
            }
             await Product.findByIdAndDelete(idValue)
            resolve({
                status: 'OK',
                message: 'Delete product susscess',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyProduct = (ids) => {
    return new Promise(async(resolve, reject) => {
        try {
             await Product.deleteMany({_id : ids})
            resolve({
                status: 'OK',
                message: 'Delete many product suscess',
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,
    deleteManyProduct
}