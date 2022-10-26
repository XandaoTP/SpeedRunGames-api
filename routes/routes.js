const games = require('../src/api/games/routes/routes')
const championships = require('../src/api/championships/routes/routes')
const auth = require('../src/Authentication/auth')
const userRoute = require('../src/api/Users/routes/routes')

module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send('Sucesso ao conectar na api')
    })
    app.use('/auth', auth)
    app.use('/users', userRoute);
    app.use('/games', games)
    app.use('/championships', championships)
    app.use((req, res) => {
        res.status(404).json({
            msg: 'Requisição não encontrada.'
        });
    });
}
