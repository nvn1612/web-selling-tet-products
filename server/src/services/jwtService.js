 const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const genneralAccessToken = async (payload) =>{
    console.log('payload', payload)
    const access_Token = jwt.sign({
        payload
    },process.env.ACCESS_TOKEN, {expiresIn: '30s'})

    return access_Token
}
const genneralRefreshToken = async (payload) =>{
    const refresh_Token = jwt.sign({
        payload
    },process.env.REFRESH_TOKEN, {expiresIn: '365d'})

    return refresh_Token
}



const RefreshTokenJwtService = (token) => {
    return new Promise(async(resolve, reject) => {
        try {
            console.log('token', token)
            jwt.verify(token, process.env.REFRESH_TOKEN, async(err, user) => {
                if(err) {
                    console.log('err', err)
                    resolve({
                        status: 'ERROR',
                        message: 'The authentication'
                    })
                }
                const {payload} = user
                const access_token = await genneralAccessToken({
                    id: payload?.id,
                    isAdmin: payload?.isAdmin
                })
                console.log('accessToken', access_token)
                resolve({
                    status: 'OK',
                    message: 'success',
                    access_token
                })
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    genneralAccessToken,
    genneralRefreshToken,
    RefreshTokenJwtService
}