import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersBondsService } from './users-bonds.service';
import { CreateUsersBondDto } from './dto/create-users-bond.dto';
import { UpdateUsersBondDto } from './dto/update-users-bond.dto';

@Controller('users-bonds')
export class UsersBondsController {
  constructor(private readonly usersBondsService: UsersBondsService) {}

  @Post()
  create(@Body() createUsersBondDto: CreateUsersBondDto) {
    return this.usersBondsService.create(createUsersBondDto);
  }

  @Get()
  findAll() {
    return this.usersBondsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersBondsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersBondDto: UpdateUsersBondDto) {
    return this.usersBondsService.update(+id, updateUsersBondDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersBondsService.remove(+id);
  }
}
