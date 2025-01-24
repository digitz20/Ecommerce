'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stores.associate=(models)=>{
        stores.hasOne(models.products,{foreignKey:"storeid",as:"products"})
    
      }
      // define association here
    }
  }
  stores.init({
    storeName: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'stores',
  });
  return stores;
};


