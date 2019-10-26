import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from "../database";
export  default class Contact extends Model {
    public ID!: number;
    public name: string;
    public phone: string;
   // public  photo : Blob;
    public email: string;
    public msg: string;

    public readonly createdAt!: Date;
}

Contact.init({
    ID: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    phone: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    //     photo: {
    //     type: new DataTypes.BLOB(),
    // },
    email:{
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    msg: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'contacts',
    timestamps: false
});