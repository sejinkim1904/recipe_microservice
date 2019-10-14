'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Recipes',
      'yield',
      Sequelize.FLOAT
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Recipes',
      'yield'
    );
  }
};
