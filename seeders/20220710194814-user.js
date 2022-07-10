"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Yara I Leelasena",
          email: "yileelasena@gmail.com",
          password: "akd#4545ths",
        },
        {
          name: "Casey Choi",
          email: "cachoi@gmail.com",
          password: "hsdhj#$#%4672sd",
        },
        {
          name: "Kevin Pearson",
          email: "manny@gmail.com",
          password: "hfj@$268fhs",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
