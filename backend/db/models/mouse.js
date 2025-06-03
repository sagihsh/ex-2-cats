'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mouse.init({
    name: DataTypes.STRING,
    catId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Mouse',
  });
  return Mouse;
};