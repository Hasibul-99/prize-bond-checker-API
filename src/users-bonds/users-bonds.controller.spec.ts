import { Test, TestingModule } from '@nestjs/testing';
import { UsersBondsController } from './users-bonds.controller';
import { UsersBondsService } from './users-bonds.service';

describe('UsersBondsController', () => {
  let controller: UsersBondsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersBondsController],
      providers: [UsersBondsService],
    }).compile();

    controller = module.get<UsersBondsController>(UsersBondsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
