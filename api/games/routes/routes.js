const { Router } = require('express')
const route = Router()
const GameController = require('../controllers/games.controller')

route.get('/games', GameController.getAll)
route.get('/games/:gameId', GameController.selectGame)
route.post('/games', GameController.createGame)
route.put('/edit-game/:gameId', GameController.editGame)
route.delete('/delete-game/:gameId', GameController.deleteGame)


module.exports = route