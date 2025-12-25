import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChatMessagesService } from './chatmessages.service';
import { CreateChatMessageDto } from './dto/create-chatmessage.dto';

@Controller('chatmessages')
export class ChatMessagesController {
  constructor(private readonly chatMessagesService: ChatMessagesService) {}

  @Post()
  async create(@Body() createChatMessageDto: CreateChatMessageDto) {
    return this.chatMessagesService.create(createChatMessageDto);
  }

  @Get()
  async findAll() {
    return this.chatMessagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.chatMessagesService.findOne(id);
  }
}
