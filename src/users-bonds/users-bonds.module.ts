import { Module } from '@nestjs/common';
import { UsersBondsService } from './users-bonds.service';
import { UsersBondsController } from './users-bonds.controller';

@Module({
  controllers: [UsersBondsController],
  providers: [UsersBondsService]
})
export class UsersBondsModule {}
