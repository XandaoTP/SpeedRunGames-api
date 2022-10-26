const createUsers = require('../service/userservice')
const errors = require('../../../error/errors')

class UserController {
    
    static async createUser(req, res) {
        const email = req.body
        try {
            const isUserExisting = await createUsers(email)
            return res.status(201).send(isUserExisting);

        } catch (erro) {
            errors(erro, res)
        }
    }
};

module.exports = UserController;