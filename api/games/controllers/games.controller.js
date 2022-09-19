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

    static async createGame (req, res) {
        const { name, avaliable, plataform } = req.body
        const verifyingGame = await dataBase.games.findOne({
            where : {
                name: name
            }
        })
        if(verifyingGame) {
            return res.status(401).send("Jogo já cadastrado")
        }
        try {
            const game = await dataBase.games.create(addGame)
            return res.status(200).send({msg: "game cadastrado.", ...game})
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
    static async editGame (req, res) {
       const { gameId } = req.params
       const editedGame = req.body
       try {
            await dataBase.games.update(editedGame, {
                where: {
                    id: Number(gameId)
                }       
            })
            const updGame = await dataBase.games.findOne({
                where: {
                    id: Number(gameId)
                }
            })
            res.status(200).send({msg: "game atualizado!", ...updGame})
       } catch (error) {
        return res.status(500).send(error.message)
       }
    }
    static async deleteGame (req, res) {
        const { gameId } = req.params
        try {
            await dataBase.games.destroy({
                where: {
                    id: Number(gameId)
                }
             }) 
            return res.status(200).send({msg: "deletado"})
        } catch (error) {
         return res.status(500).send(error.message)
        }
    }
}


module.exports = GameController
