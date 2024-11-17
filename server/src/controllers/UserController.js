const UserService = require('../services/UserService')
const createUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const isCheckEmail = reg.test(email)
        if(!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the input is required'
            })
        }else if(!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the input is email'
            })
        }else if(password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the password is not equal confirmPassword '
            })
        }               
        const result = await UserService.createUser(req.body)
        return res.status(200).json(result)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const isCheckEmail = reg.test(email)
        if(!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the input is required'
            })
        }else if(!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the input is email'
            })
        }else if(password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the password is not equal confirmPassword '
            })
        }               
        const result = await UserService.loginUser(req.body)
        return res.status(200).json(result)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params
        const data = req.body
        if(!userId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The userID is required'
            })
        }
        const response = await UserService.updateUser(userId,data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser,
    loginUser,
    updateUser
}