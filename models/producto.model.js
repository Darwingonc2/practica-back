import  {Model, DataTypes} from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class ProductoModel extends Model {}

ProductoModel.init( {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        precio:  {
            type: DataTypes.NUMBER(10) ,
            allowNull: true
        },
        expiracion:  {
            type: DataTypes.DATE,
            allowNull: true
        },
        notas:  {
            type: DataTypes.STRING(200) ,
            allowNull: true
        },
        stock:  {
            type: DataTypes.INTEGER(10) ,
            allowNull: false
        },
        activo:  {
            type: DataTypes.STRING(40) ,
            allowNull: true
        },
        img:  {
            type: DataTypes.STRING(255) ,
            allowNull: true
        },

    }, {
        sequelize: DatabaseConfig,
        tableName: 'productos',
        timestamps: false
    }
);