const { Router } = require('express')
const verifyid = require('../../Verify/verifyid')
const auth = require('../../../Authentication/auth')
const tokenAuth = require('../../../Authentication/tokenAuth')
const route = Router()
const GameController = require('../controllers/games.controller')

route.get('/games', tokenAuth, GameController.getAll)
route.get('/gamesforplataformn64', GameController.getN64Games)
route.get('/games/:id', verifyid , GameController.selectGame)
route.post('/games', GameController.createGame)
route.put('/edit-game/:gameId', GameController.editGame)
route.delete('/delete-game/:gameId', GameController.deleteGame)
route.post('/recover-game/:gameId', GameController.restoreGame)


route.get('/inscr/:user_id/champ/:championships_id', GameController.getInscription)
route.post('/inscription/:inscription_id', GameController.createInscription)
route.put('/inscription/:user_id/champ/:championships_id', GameController.editInscription)
route.delete('/inscription/:inscription_id', GameController.delInscription)
route.get('/getallinscriptions', GameController.getAllInscript)


module.exports = route