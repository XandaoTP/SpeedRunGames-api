const dataBase = require('../../../dbConfig/models')


module.exports = async (id) => {
    const GameId = await dataBase.games.findByPk(id, { 
        include : {
        model: dataBase.championships,
        model: dataBase.inscriptions
        }
    })
    return GameId
}