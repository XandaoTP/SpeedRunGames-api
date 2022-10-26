const dataBase = require('../../../dbConfig/models');
const bcrypt = require("bcrypt");
const findEmail = require('./findEmail');
const AllError = require('../../../error/errorentity');


module.exports = async ({ res, name, email, senha}) => {

        const encryptPass = await bcrypt.hash(senha, 10);

        const isUserExisting = await findEmail(email)
        

        if(isUserExisting) {
            throw new AllError('Email já cadastrado.', 202) 
        };

        const adminUser = {
            name,
            email,
            senha: encryptPass,
        };

        const userCreate = await dataBase.AdminUsers.create(adminUser);
          
          return userCreate;

}