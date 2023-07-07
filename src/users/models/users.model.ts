import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  login: string,
  email: string,
  password: string,
}

@Table
export class User extends Model<User, UserCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING })
  login: string;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;
}
