import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from "../database";
export  default class Driver extends Model {
    public vaichal_id!: number;
    public vaichal_name: string;
    public vaichal_type: string;
    public driver_name: string;
    public driver_contact_no: string;
    public vaichal_lat: string;
    public vaichal_long: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Driver.init({
    vaichal_id: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    vaichal_name: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    vaichal_type: {
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    driver_name:{
        type: new DataTypes.STRING(100),
        allowNull: false,
    },
    driver_contact_no:{
        type: new DataTypes.STRING(20),
        allowNull: false,
    },
    vaichal_lat:{
      type: new DataTypes.STRING(50),
      allowNull: false
    },
    vaichal_long: {
        type: new DataTypes.STRING(50),
        allowNull: false,
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
    tableName: 'vaichals',
    timestamps: false
});
