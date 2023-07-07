import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
const bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
    private jwtService: JwtService) { }

  async login(dto: CreateUserDto) {
    const user = await this.validateUser(dto);
    return await this.generateToken({ login: user.login, email: user.email, password: user.password });
  }

  async registration(dto: CreateUserDto) {
    console.log(dto.email);
    const candidate = await this.usersService.findByEmail(dto.email);

    if (candidate) {
      return new UnauthorizedException({ message: 'User is found' });
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.usersService.create({ ...dto, password: hashPassword })

    return await this.generateToken({ login: user.login, email: user.email, password: user.password })
  }

  private async generateToken(payload: { login: string, email: string, password: string }) {
    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }

  private async validateUser(dto: CreateUserDto) {
    const user = await this.usersService.findByEmail(dto.email)
    const isEquals = await bcrypt.compare(dto.password, user.password);

    if (user && isEquals) {
      return user;
    }
  }
}
