import { Column, Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Cat } from 'src/cat/models/cat.model';

@Table({ tableName: "mice" })
export class Mouse extends Model {
  @Column
  name: string;

  @ForeignKey(() => Cat)
  @Column
  catId: number;

  @BelongsTo(() => Cat)
  cat: Cat;
}
