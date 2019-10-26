import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from "../database";
export  default class Ambulance extends Model {
    public ambulance_id!: number;
    public ambulance_number: string;
    public driver_name: string;
    public driver_contact_no: string;
    public current_lat: string;
    public current_lon: string;
    public available_status: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Ambulance.init({
    ambulance_id: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    ambulance_number: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    driver_name: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    driver_contact_no:{
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    current_lat:{
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    current_lon: {
        type: new DataTypes.STRING(100),
        allowNull: true,
    },
    available_status: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    tableName: 'ambulance',
    timestamps: true
});
