const jwt = require('jsonwebtoken');
const db = require('../../../dbConfig/models')
require('dotenv').config();
const key = 'contato@alexandreasilva.com.br'

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
                const token = jwt.sign(payload, key);
                res.set('Authorization', token)
                res.status(204).send('Sucesso na autorização.')
            }
        } else {
            return res.status(400).send('algo deu errado')
        }
    } catch {
        return res.status(500).send('algo deu errado')
    }
}