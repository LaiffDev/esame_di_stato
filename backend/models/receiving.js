'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receiving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receiving.belongsTo(models.Student, {foreignKey: 'id'});
      Receiving.belongsTo(models.Teacher, {
        foreignKey: 'teacher_interested', 
        targetKey: 'fullname', 
      })
    }
  }
  Receiving.init({
    description: DataTypes.STRING,
    date_time_of_receiving: DataTypes.DATE,
    teacher_interested: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Teachers',
        key: 'fullname',
      }
    },
  }, {
    sequelize,
    modelName: 'Receiving',
  });
  return Receiving;
};