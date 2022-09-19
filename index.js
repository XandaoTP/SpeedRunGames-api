const express = require('express')
const app = express()
const routes = require('./routes/routes')
app.use(express.json())
const PORT = process.env.PORT || 3005;

routes(app)


app.listen(PORT, () => {
    console.log(`funfando na porta ${PORT}`)
})