const dataBase = require('../../../dbConfig/models')

class ServiceForModel {
    constructor(Model) {
        this.Model = Model
    }

    async getAllGames() {
    return dataBase[this.Model].findAll({
        paranoid: false   
        });
    }
}

module.exports = ServiceForModel