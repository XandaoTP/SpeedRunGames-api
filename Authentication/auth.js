const jwt = require('jsonwebtoken');
const db = require('../dbConfig/models')
require('dotenv').config();

module.exports = async (req, res) => {
    const { email, senha, name} = req.body;
    try {
        const user = await db.AdminUsers.findOne({
            where: {
                email: email
            }
        })
        console.log(user)
        if(user) {
            if(user.senha === senha) {
                const payload = {
                    email: email,
                }
                const token = jwt.sign(payload, process.env.SECRET_JWT_KEY);
                res.set('Authorization', token)
                res.status(204).send(token)
            }
        } else {
            return res.status(400).send('algo deu errado')
        }
    } catch {
        return res.status(500).send('algo deu errado')
    }
}