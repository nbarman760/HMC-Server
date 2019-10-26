"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Driver extends sequelize_1.Model {
}
exports.default = Driver;
Driver.init({
    vaichal_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    vaichal_name: {
        type: new sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    vaichal_type: {
        type: new sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    driver_name: {
        type: new sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    driver_contact_no: {
        type: new sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    vaichal_lat: {
        type: new sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    vaichal_long: {
        type: new sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'vaichals',
    timestamps: false
});
//# sourceMappingURL=Driver.js.map