import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from "../database";
export  default class AssignCar extends Model {
    public assign_id!: number;
    public vaichal_id: string;
    public booking_id: string;
    public arrival_time: Date;
    public departure_time: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

AssignCar.init({
    assign_id: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    vaichal_id: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    booking_id: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    arrival_time:{
        type: DataTypes.DATE,
        allowNull: true
    },
    departure_time:{
        type: DataTypes.DATE,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'car_assign',
    timestamps: false
});
