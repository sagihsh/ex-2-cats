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

export async function doStuffWithCatModel() {
    const newCat = await Cat.create({
        name: 'meow1',
    });
    console.log(newCat.id, newCat.name);

    const foundCat = await Cat.findOne({ where: { name: 'meow1' } });
    if (foundCat === null) return;
    console.log(foundCat.name);
}