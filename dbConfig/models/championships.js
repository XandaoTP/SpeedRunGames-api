'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class championships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      championships.belongsTo(models.games, {
        foreignKey: 'champs_id'
      })
      
    }
    static associate(models) {
      championships.belongsTo(models.inscriptions, {
        foreignKey: 'inscriptions_id'
      })
    }
  }
  championships.init({
    nome: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    qty: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'championships',
  });
  return championships;
};