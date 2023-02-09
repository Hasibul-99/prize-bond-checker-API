import { Injectable } from '@nestjs/common';
import { CreateUsersBondDto } from './dto/create-users-bond.dto';
import { UpdateUsersBondDto } from './dto/update-users-bond.dto';

@Injectable()
export class UsersBondsService {
  create(createUsersBondDto: CreateUsersBondDto) {
    return 'This action adds a new usersBond';
  }

  findAll() {
    return `This action returns all usersBonds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersBond`;
  }

  update(id: number, updateUsersBondDto: UpdateUsersBondDto) {
    return `This action updates a #${id} usersBond`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersBond`;
  }
}
