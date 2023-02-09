import { Test, TestingModule } from '@nestjs/testing';
import { UsersBondsService } from './users-bonds.service';

describe('UsersBondsService', () => {
  let service: UsersBondsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersBondsService],
    }).compile();

    service = module.get<UsersBondsService>(UsersBondsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
