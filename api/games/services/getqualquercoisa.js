const dataBase = require('../../../dbConfig/models')


module.exports = async (gameId) => {
    const GameId = await dataBase.games.findByPk(gameId)   
    if(!GameId === null) {
    return res.status(404).send('não encontrado.')
    }
}