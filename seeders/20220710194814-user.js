"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          name: "Yara I Leelasena",
          emaii: "yileelasena@gmail.com",
          phone: 0657984321,
          password: "akd#4545ths",
        },
        {
          name: "Casey Choi",
          emaii: "cachoi@gmail.com",
          phone: 056732254664,
          password: "hsdhj#$#%4672sd",
        },
        {
          name: "Kevin Pearson",
          email: "manny@gmail.com",
          phone: 0763241588,
          password: "hfj@$268fhs",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user", null, {});
  },
};
