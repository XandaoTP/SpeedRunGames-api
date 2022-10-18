const dataBase = require('../../../dbConfig/models')

class ServiceForGames {
    constructor(getGames) {
        this.getGames = getGames
    }

    async getAllGames() {
    return dataBase[this.getGames].findAll({
        paranoid: false   
        });
    }
    async getN64Plataform() {
        return dataBase[this.getGames].scope("plataform").findAll()
    }
}

module.exports = ServiceForGames