"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Home extends sequelize_1.Model {
}
exports.default = Home;
Home.init({
    ID: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    fathername: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    //     photo: {
    //     type: new DataTypes.BLOB(),
    // },
    admissiondate: {
        type: new sequelize_1.DataTypes.DATE(),
        allowNull: false,
    },
    releasedate: {
        type: new sequelize_1.DataTypes.DATE(),
        allowNull: false,
    },
    duration: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: database_1.sequelize,
    tableName: 'homes',
    timestamps: false
});
//# sourceMappingURL=Home.js.map