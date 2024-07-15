'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
          Teacher.hasMany(models.Receiving, { foreignKey: 'teacher_interested' });
    }
  }
  Teacher.init({
    fullname: {
      type: DataTypes.STRING,
      unique: true,
    },
    specialization: DataTypes.STRING,
    experience: DataTypes.STRING,
    days_of_availability: DataTypes.STRING,
    method_of_receiving: DataTypes.STRING,
    receiving_availability: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};