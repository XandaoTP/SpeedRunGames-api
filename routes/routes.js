const games = require('../api/games/routes/routes')
const championships = require('../api/championships/routes/routes')

module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send('Sucesso')
    })
    app.use('/games', games)
    app.use('/championships', championships)
}