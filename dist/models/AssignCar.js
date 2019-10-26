"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class AssignCar extends sequelize_1.Model {
}
exports.default = AssignCar;
AssignCar.init({
    assign_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    vaichal_id: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    booking_id: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    arrival_time: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    departure_time: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
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
    tableName: 'car_assign',
    timestamps: false
});
//# sourceMappingURL=AssignCar.js.map