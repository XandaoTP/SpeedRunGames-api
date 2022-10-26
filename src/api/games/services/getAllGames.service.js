const dataBase = require('../../../../dbConfig/models')

class ServiceForGames {
    constructor(getGames) {
        this.getGames = getGames
    }

    async getAllGames() {
    return dataBase[this.getGames].findAll({
        include:{
            model: dataBase.championships,
            model: dataBase.inscriptions
        } 
        });
    }
    async getN64Plataform() {
        return dataBase[this.getGames].scope("plataform").findAll()
    }
}

module.exports = ServiceForGames