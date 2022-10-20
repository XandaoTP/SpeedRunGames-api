const jwt = require('jsonwebtoken')
const dataBase = require('../../../dbConfig/models')
require('dotenv').config();

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const payload = jwt.verify(token, process.env.SECRET_JWT_KEY)
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
    }
