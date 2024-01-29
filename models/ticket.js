const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Ticket = sequelize.define("ticket", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  ticket: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
});
module.exports = Ticket;
