import { Column, Table, Model, HasMany } from 'sequelize-typescript';
import { Mouse } from 'src/mouse/models/mouse.model';

@Table({ tableName: "cats" })
export class Cat extends Model {
  @Column
  name: string;

  @Column
  image: string;

  @Column
  description: string;

  @HasMany(() => Mouse)
  mice: Mouse[];
}