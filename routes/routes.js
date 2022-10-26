const games = require('../api/games/routes/routes')
const championships = require('../api/championships/routes/routes')
const auth = require('../Authentication/auth')
const userRoute = require('../api/Users/routes/routes')

module.exports = (app) => {
    app.get('/', (req, res) => {
        return res.send('Sucesso ao conectar na api')
    })
    app.get('/auth', auth)
    app.use("/users", userRoute);
    app.use('/games', games)
    app.use('/championships', championships)
    app.use((req, res) => {
        res.status(404).json({
            message: 'Requisição não encontrada.'
        });
    });
}
