'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    foodType: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    calories: DataTypes.FLOAT,
    totalTime: DataTypes.FLOAT,
    yield: DataTypes.FLOAT,
    ingredients: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
