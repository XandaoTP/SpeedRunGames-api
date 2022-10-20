const games = require('../api/games/routes/routes')
const championships = require('../api/championships/routes/routes')
const auth = require('../api/games/Authentication/auth')

module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send('Sucesso ao conectar na api')
    })
    app.get('/auth', auth)
    app.use('/games', games)
    app.use('/championships', championships)
}