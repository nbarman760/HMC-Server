import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from "../database";
export  default class ShiftBooking extends Model {
    public ID!: number;
    public booking_id: string;
    public book_by: number;
    public pickup_address: string;
    public pickup_lat: string;
    public pickup_long: string;
    public destination_address: string;
    public destination_lat: string;
    public destination_long: string;
    public shift_items: string;
    public shift_cost: string;
    public shift_status: string;
    public shift_time: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ShiftBooking.init({
    ID: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    booking_id: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    book_by: {
        type: new DataTypes.INTEGER,
        allowNull: false,
    },
    pickup_address:{
        type: new DataTypes.TEXT,
        allowNull: false,
    },
    pickup_lat:{
        type: new DataTypes.STRING(50),
        allowNull: false,
    },
    pickup_long:{
      type: new DataTypes.STRING(50),
      allowNull: false
    },
    destination_address: {
        type: new DataTypes.TEXT,
        allowNull: true,
    },
    destination_lat: {
        type: new DataTypes.STRING(50),
        allowNull: false,
    },
    destination_long: {
        type: new DataTypes.STRING(50),
        allowNull: false,
    },
    shift_items: {
        type: new DataTypes.TEXT,
        allowNull: false,
    },
    shift_cost: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    shift_status: {
        type: new DataTypes.STRING(20),
        allowNull: false,
    },
    shift_time: {
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
    tableName: 'shift_booking',
    timestamps: false
});
