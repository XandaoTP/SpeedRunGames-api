const dataBase = require('../../../dbConfig/models');

module.exports = async (email) => {
    const adminUser = await dataBase.AdminUsers.findOne({
        where: {
            email: email
        }
    });

    return adminUser
}