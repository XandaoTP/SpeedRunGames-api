const dataBase = require('../../../dbConfig/models')

class GameController {
    static async getAll(req, res) {
        try {
            const allGames = await dataBase.games.findAll()
            return res.status(200).send(allGames)
        } catch {
            return res.status(500).send(error.message)
        }
    }
    static async selectGame(req, res) {
        const { gameId } = req.params
        try {
            const game = await dataBase.games.findOne({
                where: {
                    id: Number(gameId)
                }
            })   
            if(game === null) {
                return res.status(404).send('não encontrado.')
            }
            return res.status(200).send(game)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}



module.exports = GameController
