import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from "../database";
export  default class AssignAmbulance extends Model {
    public assign_id!: number;
    public vaichal_id: string;
    public user_id: string;
    public pickup_status: number;
    public drop_to_hospital_status: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

AssignAmbulance.init({
    assign_id: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    vaichal_id: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    user_id: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    pickup_status:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    drop_to_hospital_status:{
        type: DataTypes.INTEGER,
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
    tableName: 'assign_ambulance',
    timestamps: true
});
