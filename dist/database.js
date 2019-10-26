"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('webform', 'root', 'N#123456', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+05:30'
});
// export const sequelize = new Sequelize('packerweb', 'root', 'hadoopadmin', {
//     host: '157.230.176.181',
//     dialect: 'mysql',
//     timezone: '+05:30'
// });
//# sourceMappingURL=database.js.map