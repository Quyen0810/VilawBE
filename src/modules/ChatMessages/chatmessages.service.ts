import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatMessage, ChatMessageDocument } from './schemas/chatmessage.schema';
import { CreateChatMessageDto } from './dto/create-chatmessage.dto';

@Injectable()
export class ChatMessagesService {
  constructor(@InjectModel(ChatMessage.name) private chatMessageModel: Model<ChatMessageDocument>) {}

  async create(createChatMessageDto: CreateChatMessageDto): Promise<ChatMessage> {
    const chatMessage = new this.chatMessageModel(createChatMessageDto);
    return chatMessage.save();
  }

  async findAll(): Promise<ChatMessage[]> {
    return this.chatMessageModel.find().exec();
  }

  async findOne(id: string): Promise<ChatMessage> {
    const chatMessage = await this.chatMessageModel.findById(id).exec();
    if (!chatMessage) {
      throw new NotFoundException('Chat message not found');
    }
    return chatMessage;
  }
}
