'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Recipes',
      'createdAt',
      {
        type: Sequelize.DATE,
      }
    );
  },

  down: (queryInterface, Sequelize) => {

  }
};
