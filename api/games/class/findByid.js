class GameFind  {

static oneGame ({ id, name, ativo, plataform, inscriptions}) {
    return {
        id,
        name,
        ativo,
        plataform,
        inscriptions: {
            id: inscriptions.id,
            name: inscriptions.name
        }
        }
    }
}

module.exports = GameFind