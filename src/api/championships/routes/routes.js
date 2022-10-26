const { Router } = require('express')
const ChampionshipsController = require('../controllers/championship.controller')
const route = Router()

route.get('/getallchamps', ChampionshipsController.getAllChampionships)
route.get('/getallchamps/:championship_id', ChampionshipsController.getOneChampionship)
route.post('/createchampionship', ChampionshipsController.createChampionship)
route.put('/editchampionship/:championship_id', ChampionshipsController.updateChampionships)
route.delete('/deletechampionship/:championship_id', ChampionshipsController.deleteChampionship)


module.exports = route