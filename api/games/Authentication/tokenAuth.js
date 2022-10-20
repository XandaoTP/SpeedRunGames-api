const jwt = require('jsonwebtoken')
const dataBase = require('../../../dbConfig/models')
const key = 'xandao123'

module.exports = async (req, res, next) => {
    const token = req.body;
    if (token) {
        try {
            const payload = jwt.verify(token, key)
            if(payload.email) {
                next()
            } else {
                return res.status(400).send('token invalido')
            }
        } catch (err) {
            return res.status(500).send(err.message)
        }
    }else {
        return res.status(401).send('Usuario não autorizado.')
        }
        next()
    }
