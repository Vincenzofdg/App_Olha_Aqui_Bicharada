'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class rescues extends Model {
    static associate(models) {
      this.belongsTo(models.user, {foreignKey: 'userId', as: 'user'})
    }
  }
  rescues.init({
    name: DataTypes.STRING,
    walking: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    hour: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'rescue',
    timestamps: true,
    updatedAt: false,
    createdAt: 'created'
  });
  return rescues;
};