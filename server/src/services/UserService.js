const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const { genneralAccessToken, genneralRefreshToken } = require("./jwtService");
const createUser = (newUser) => {
    return new Promise(async(resolve, reject) => {
        const {name, email, password, confirmPassword, phone} = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if(checkUser !== null)
                {
                    resolve({
                        status: 'OK',
                        message: 'The email is already'
                    })
                }
            const hash =  bcrypt.hashSync(password, 10)
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                confirmPassword,
                phone
            })

        if(createdUser) {
            resolve({
                status:'OK',
                message: 'SUCCESS',
                data: createdUser
            })
        }
        } catch (e) {
            reject(e)
        }
    })
}

const loginUser = (userLogin) => {
    return new Promise(async(resolve, reject) => {
        const { email, password} = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if(checkUser === null)
                {
                    resolve({
                        status: 'OK',
                        message: 'The user is not defined'
                    })
                }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            if(!comparePassword){
                resolve({
                    status: 'OK',
                    message: 'The password or user is incorrect'
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            })
        } catch (e) {
            reject(e)
        }
    })
}

const updateUser = (id, data) => {
    console.log('id', id)
    return new Promise(async(resolve, reject) => {
        try {
            const idValue = typeof id === 'object' ? id.id : id;
            const checkUser = await User.findOne({
                _id: idValue
            })
            console.log('checkUser', checkUser)
            if(checkUser === null){
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }
            const updateUser = await User.findByIdAndUpdate(idValue, data, {new: true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateUser
            })
        } catch (e) {
            reject(e)
        }
    })
}


const deleteUser = (id, data) => {
    console.log('id', id)
    return new Promise(async(resolve, reject) => {
        try {
            const idValue = typeof id === 'object' ? id.id : id;
            const checkUser = await User.findOne({
                _id: idValue
            })
            console.log('checkUser', checkUser)
            if(checkUser === null){
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }
             await User.findByIdAndDelete(idValue)
            resolve({
                status: 'OK',
                message: 'Delete user susscess',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const allUser = await User.find()

            resolve({
                status: 'OK',
                message: 'Delete user susscess',
                data: allUser
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsUser = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const idValue = typeof id === 'object' ? id.id : id;
            const user = await User.findOne({
                _id: idValue
            })
            if(user === null){
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'Delete user susscess',
                data: user
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser
}