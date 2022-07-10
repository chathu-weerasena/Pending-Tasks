"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoList",
      [
        { name: "Yara I Leelasena" },
        { name: "Casey Choi" },
        { name: "Kevin Pearson" },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoList", null, {});
  },
};
