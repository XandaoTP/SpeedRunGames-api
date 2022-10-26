const createUsers = require('../service/user.service')
const dataBase = require('../../../dbConfig/models')

class UserController {
    
    static async createUser(req, res) {
        
        try {
            const isUserExisting = await dataBase.AdminUsers.find({
                where: {
                    email: email
                }
            })
            // if(isUserExisting) {
            //     throw new error('User email already exists', 202)
            // };
            return res.status(201).send(isUserExisting);

        } catch (error) {
            res.status(400).send("errooo");
        }
    }
};

module.exports = UserController;