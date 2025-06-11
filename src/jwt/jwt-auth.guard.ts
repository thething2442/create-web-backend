// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy,AuthGuard } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import 'dotenv/config'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_DATA!,
      ignoreExpiration:false,
      algorithms:['HS256']
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
  
}








@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
