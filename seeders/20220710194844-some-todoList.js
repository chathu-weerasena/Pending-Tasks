"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItem"[
        ({ task: "Add new files", deadline: "23/08/2022" },
        { task: "Confirm and update added files", deadLine: "03/08/2022" },
        { task: "Send updated files", deadline: "08/09/2022" })
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItem", null, "");
  },
};
