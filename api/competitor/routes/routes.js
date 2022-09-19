const { Router } = require('express')
const route = Router()

route.get('/register', (req, res) => res.send({msg: 'funcionado', serviceRoute: 'games api'}))


module.exports = route