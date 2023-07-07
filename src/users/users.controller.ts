import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post('create')
  create(@Body() dto: CreateUserDto) {
    console.log(process.env.TOKEN_SECRET)
    return this.usersService.create(dto);
  }

  @UseGuards(AuthGuard)
  @Delete('remove/:id/')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Delete('remove/')
  removeAll() {
    return this.usersService.removeAll();
  }

}
