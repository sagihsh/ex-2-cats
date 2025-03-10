import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../helpers/dbService";

export class Cat extends Model {
    declare id: number;
    declare name: string;
}

Cat.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: 'cats',
        sequelize,
    },
);