import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChatSessionsService } from './chatsessions.service';
import { CreateChatSessionDto } from './dto/create-chatsession.dto';

@Controller('chatsessions')
export class ChatSessionsController {
  constructor(private readonly chatSessionsService: ChatSessionsService) {}

  @Post()
  async create(@Body() createChatSessionDto: CreateChatSessionDto) {
    return this.chatSessionsService.create(createChatSessionDto);
  }

  @Get()
  async findAll() {
    return this.chatSessionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.chatSessionsService.findOne(id);
  }
}
