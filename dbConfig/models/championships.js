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
        foreignKey: 'championships_id'
      })
      
    }
    static associate(models) {
      championships.belongsTo(models.inscriptions, {
        foreignKey: 'user_id'
      })
    }
  }
  championships.init({
    name: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    user_id: DataTypes.NUMBER,
    championships_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'championships',
    paranoid: true
  });
  return championships;
};