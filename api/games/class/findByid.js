class GameFind  {

static oneGame ({ id, name, ativo, plataform, inscriptions, championships}) {
    return {
        id,
        name,
        ativo,
        plataform,
        inscriptions,
        championships,
        }
    }
}
module.exports = GameFind