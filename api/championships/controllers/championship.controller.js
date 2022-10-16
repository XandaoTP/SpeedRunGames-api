const dataBase = require('../../../dbConfig/models')

class ChampionshipsController {
  static async getAllChampionships(req, res) {
    try {
      const allchampionships = await dataBase.championships.findAll();
      return res.status(200).send(allchampionships);
    } catch (err) {
      return res.status(500).send('erro ao buscar campeonatos');
    }
  }

  static async getOneChampionship(req, res) {
    const { championship_id } = req.params;
    try {
      const oneChamp = await dataBase.championships.findOne({
        where: {
          id: Number(championship_id)
        }
      });
      return res.status(200).send(oneChamp);
    } catch (err) {
      return res.status(500).send('Erro ao buscar campeonato');
    }
  }

  static async createChampionship(req, res) {
    const newChamp = req.body;
    try {
      const CreatedChamp = await dataBase.championships.create(newChamp);
      return res.status(200).send(CreatedChamp);
    } catch (err) {
      return res.status(500).send('erro ao criar campeonato');
    }
  }

  static async updateChampionships(req, res) {
    const { championship_id } = req.params;
    const addNewDataChamps = req.body;
    try {
      await dataBase.championships.update(addNewDataChamps, {
        where: { 
            id: Number(championship_id) 
         }
      });
      const upatedChamp = await dataBase.championships.findOne({
        where: { 
            id: Number(championship_id) 
        }
      });
      return res.status(200).send(upatedChamp);
    } catch (err) {
      return res.status(500).send('Erro ao editar campeonato');
    }
  }

  static async deleteChampionship(req, res) {
    const { championship_id } = req.params;
    try {
      await dataBase.championships.destroy({
        where: {
          id: Number(championship_id)
        }
      });
      return res
        .status(200)
        .send(`O campeonato ID: ${championship_id} foi apagado.` );
    } catch (err) {
      return res.status(500).send('erro na requisição');
    }
  }
}

module.exports = ChampionshipsController
