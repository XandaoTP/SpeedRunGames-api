const games = require('../api/games/routes/routes')
const register = require('../api/competitor/routes/routes')

module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send('Sucesso')
    })
    app.use('/games', games)
    app.use('/register', register)
}