import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { PrizeModule } from './prize/prize.module';
import { UsersBondsModule } from './users-bonds/users-bonds.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,
    AuthModule,
    PrizeModule,
    UsersBondsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
