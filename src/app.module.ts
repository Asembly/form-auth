import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'form-auth',
      autoLoadModels: true,
      models: [],
    }), UsersModule, AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    })],
  controllers: []
})

export class AppModule { }
