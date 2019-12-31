'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Todos',
      [
        {
          task: 'Write code',
          isDone: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Review pull requests',
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
