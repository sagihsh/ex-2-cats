import { Column, Table, Model } from 'sequelize-typescript';

@Table({ tableName: "cats" })
export class Cat extends Model {
  @Column
  name: string;

  @Column
  image: string;

  @Column
  description: string;
}