import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersBondDto } from './create-users-bond.dto';

export class UpdateUsersBondDto extends PartialType(CreateUsersBondDto) {}
