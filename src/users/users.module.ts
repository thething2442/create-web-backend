// users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { JwtStrategy } from 'src/jwt/jwt-auth.guard';
import 'dotenv/config'
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    JwtModule.register({
      secret:process.env.JWT_DATA!,
      signOptions:{expiresIn:'2h'}
    })
  ],
  controllers: [UsersController],
  providers: [UserService,JwtStrategy],
  exports:[UserService]
})
export class UsersModule {}
