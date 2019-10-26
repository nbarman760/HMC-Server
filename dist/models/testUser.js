"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var sequelize = new Sequelize('webform', 'root', 'N#123456');
var User1 = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});
sequelize.sync().then(function () {
    return User1.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });
}).then(function (jane) {
    console.log(jane.get({
        plain: true
    }));
});
exports.default = User1;
//# sourceMappingURL=testUser.js.map