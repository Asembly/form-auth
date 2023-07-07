import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/users.dto';
import { User } from './models/users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) { }

  async findAll() {
    return this.userModel.findAll()
  }

  async remove(id: number) {
    const user = await this.userModel.findOne({ where: { id } });
    await user.destroy();
    return "user removed";
  }
  async removeAll() {
    const users = await this.userModel.findAll();
    users.map(user => (
      user.destroy()
    ))
    return "users removed";
  }

  async create(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);
    return user;
  }

  findOne(id: number) {
    return this.userModel.findOne({ where: { id } })
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ where: { email } })
    return user;
  }

}
