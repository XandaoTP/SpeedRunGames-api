'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      games.hasMany(models.inscriptions, {
        foreignKey: 'inscriptions_id'
      })
      games.hasMany(models.championships, {
        foreignKey: 'championships_id'
      })
    }
  }
  games.init({
    name: DataTypes.STRING,
    avaliable: DataTypes.BOOLEAN,
    plataform: DataTypes.STRING
  }, { 
    sequelize,
    modelName: 'games',
  });
  return games;
};