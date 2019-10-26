"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class AssignAmbulance extends sequelize_1.Model {
}
exports.default = AssignAmbulance;
AssignAmbulance.init({
    assign_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    vaichal_id: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    user_id: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    pickup_status: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    drop_to_hospital_status: {
        type: sequelize_1.DataTypes.INTEGER,
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
    tableName: 'assign_ambulance',
    timestamps: true
});
//# sourceMappingURL=AssignAmbulance.js.map