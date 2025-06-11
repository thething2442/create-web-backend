import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { WebdataModule } from './webdata/webdata.module';
import { JwtModule } from '@nestjs/jwt';
import { PostModule } from './post/post.module';
import { CommentsModule } from './comments/comments.module';
import { TableOfContentsModule } from './table_of_contents/table_of_contents.module';
import { NavbarModule } from './navbar/navbar.module';
import { HerosectionModule } from './herosection/herosection.module';
import { FeaturesModule } from './features/features.module';
import { CtaModule } from './cta/cta.module';

import 'dotenv/config'

@Module({
  imports: [UsersModule, WebdataModule,JwtModule.register({
    secret:process.env.JWT_DATA!,
    signOptions:{expiresIn:'1h'}
  }), PostModule, CommentsModule, TableOfContentsModule, NavbarModule, HerosectionModule, FeaturesModule, CtaModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
  