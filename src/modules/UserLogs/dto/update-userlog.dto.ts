import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLogDto } from './create-userlog.dto';

export class UpdateUserLogDto extends PartialType(CreateUserLogDto) {}
