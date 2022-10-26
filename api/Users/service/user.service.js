const dataBase = require('../../../dbConfig/models');
const bcrypt = require("bcrypt");
const {error} = require('../../../error/errors');

module.exports = async ({ name, email, senha}) => {

        const encryptPass = await bcrypt.hash(senha, 10);

        const isUserExisting = await dataBase.AdminUsers.findOne({
            where: {
                email: email
            }
        })
        console.log(isUserExisting)

        if(isUserExisting) {
            throw new error('User email already exists', 202)
        };

        const adminUser = {
            name,
            email,
            senha: encryptPass,
        };

        const userCreate = await dataBase.AdminUsers.create(adminUser);
          
          return userCreate;

}