const dataBase = require('../../../dbConfig/models')


module.exports = async (id) => {
    const GameId = await dataBase.games.findByPk(id, { include : [
        dataBase.inscriptions,
        dataBase.championships
        ]
    })
    return GameId
}