import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserLogsService } from './userlogs.service';
import { CreateUserLogDto } from './dto/create-userlog.dto';

@Controller('userlogs')
export class UserLogsController {
  constructor(private readonly userLogsService: UserLogsService) {}

  @Post()
  async create(@Body() createUserLogDto: CreateUserLogDto) {
    return this.userLogsService.create(createUserLogDto);
  }

  @Get()
  async findAll() {
    return this.userLogsService.findAll();
  }
}
