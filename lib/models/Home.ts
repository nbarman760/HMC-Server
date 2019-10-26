import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {sequelize} from "../database";
import DateTimeFormat = Intl.DateTimeFormat;
export  default class Home extends Model {
    public ID!: number;
    public name: string;
    public fathername: string;
    public admissiondate: DateTimeFormat;
    public releasedate: DateTimeFormat;
    public duration: string;
}

Home.init({
    ID: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    fathername: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    //     photo: {
    //     type: new DataTypes.BLOB(),
    // },
    admissiondate:{
        type: new DataTypes.DATE(),
        allowNull: false,//ISNULL(CONVERT(varchar(50),  [Amort Into Default] ),'')
    },
    releasedate: {
        type: new DataTypes.DATE(),
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'homes',
    timestamps: false
});