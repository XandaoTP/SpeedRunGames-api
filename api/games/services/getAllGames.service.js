const dataBase = require('../../../dbConfig/models')

class ServiceForGames {
    constructor(getAll) {
        this.getAll = getAll
    }

    async getAllGames() {
    return dataBase[this.getAll].findAll({
        paranoid: false   
        });
    }
}

module.exports = ServiceForGames