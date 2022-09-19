const { Router } = require('express')
const route = Router()
const GameController = require('../controllers/games.controller')

route.get('/games', GameController.getAll)
route.get('/games/:gameId', GameController.selectGame)


module.exports = route