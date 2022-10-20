const dataBase = require('../../../dbConfig/models')
const emailException = require('../common/exception')
const ServiceForGames = require('../services/getAllGames.service')
const getAllGames = new ServiceForGames("games")
const allN64Games = new ServiceForGames("games") 
const getById = require("../services/getByPk") 
const GameFind = require('../class/findByid')

class GameController {
    static async getAll(req, res) {
        try {
            const allGames = await getAllGames.getAllGames()
            return res.status(200).send(allGames)
        } catch {
            return res.status(500).send('erro ao buscar informaçoes')
        }
    }
    static async getN64Games(req, res) {
        try {
            const allPlataformGames = await allN64Games.getN64Plataform()
            return res.status(200).send(allPlataformGames)
        } catch {
            return res.status(500).send('erro ao buscar informaçoes')
        }
    }
    static async selectGame(req, res) {
        const  id   = req.params.id;
        try {
            const game = await getById(id)
            const oneGameView = GameFind.oneGame(game)
                return res.status(200).send(oneGameView)
        } catch (error) {
            return res.status(500).send('Erro ao buscar jogo.')
        }
    }

    static async createGame (req, res) {
        const { name, plataform } = req.body
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
    static async restoreGame (req, res) {
        const { gameId } = req.params
        try {
            await dataBase.games.restore({
                where: {
                    id: Number(gameId)
                }
             }) 
            return res.status(200).send ("Informação restaurada")
        } catch (error) {
         return res.status(500).send(error.message)
        }
    }
    static async getInscription (req, res) {
        const { user_id, championships_id } = req.params;
        try {
          const onlyOneInscription = await dataBase.inscriptions.findOne({
            where: {
              id: Number(championships_id),
              inscriptions_id: Number(user_id)
            }
          });
          if (!onlyOneInscription) {
            return res.status(203).send({ msgError: "Incrição não encontrada." });
          }
          return res.status(200).send(onlyOneInscription);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
      static async createInscription (req, res) {
        const { inscription_id } = req.params;
        const { email } = req.body; 
        const newInscription = { ...req.body, inscriptions_id: Number(inscription_id)}
        try {
            const validateEmail = await dataBase.inscriptions.findOne({
                where :{
                    email: email
                }
            })
            const VerifyInscript = await dataBase.inscriptions.findOne({
                where: {
                    inscriptions_id: Number(inscription_id),
                }
            })
            if (validateEmail) { 
                return res.status(400).send('Já existe esse email cadastrado')
            } else if (!VerifyInscript) {
                return res.status(400).send('Não existe o campeonato que deseja inscriçao')
            }
            res.status(500)
            const creatingInscription = await dataBase.inscriptions.create(newInscription)
            return res.status(200).send({msgSuccess: 'Inscrição realizada.', ...creatingInscription})
        }catch (err) {
            res.status(500)

        }
      }
      static async editInscription (req, res) {
        const { user_id, championships_id } = req.params;
        const newInscript = req.body;
        try {
            await dataBase.inscriptions.update(newInscript, {
                where : {
                    id: Number(championships_id),
                    inscriptions_id: Number(user_id)
                }
            });
            const updateInscrpt = await dataBase.inscriptions.findOne({
                where: {
                    id: Number(championships_id)
                }
            });
            return res.status(200).send(updateInscrpt)
        }catch (err) {
            return res.status(500).send('Erro ao Atualizar Incrição')
        }
      }
      
    static async delInscription (req, res) {
        const { inscription_id } = req.params;
        try {
            await dataBase.inscriptions.destroy({
                where: {
                    id: Number(inscription_id)
                }
            });
            return res.status(200).send('Inscriçao deletada')
        } catch (err) {
            return res.status(500).send('Erro ao deletar')
        }
    }
    static async getAllInscript (req, res) {
        try {
            const allInscription = await dataBase.inscriptions.findAll()
            return res.status(200).send(allInscription)
        } catch (err) {
           return res.status(500).send('erro ao Buscar todas as inscrições')
        }
        
        
    }
}

module.exports = GameController
