'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      inscriptions.hasMany(models.championships, {
        foreignKey: 'user_id'
      })
      inscriptions.belongsTo(models.games, {
        foreignKey: 'user_id'
      })
    }
  }
  inscriptions.init({
    nome: DataTypes.STRING,
    data: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'inscriptions',
  });
  return inscriptions;
};