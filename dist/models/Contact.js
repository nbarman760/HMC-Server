"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Contact extends sequelize_1.Model {
}
exports.default = Contact;
Contact.init({
    ID: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    phone: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    //     photo: {
    //     type: new DataTypes.BLOB(),
    // },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    msg: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'contacts',
    timestamps: false
});
//# sourceMappingURL=Contact.js.map