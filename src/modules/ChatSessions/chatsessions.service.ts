import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatSession, ChatSessionDocument } from './schemas/chatsession.schema';
import { CreateChatSessionDto } from './dto/create-chatsession.dto';

@Injectable()
export class ChatSessionsService {
  constructor(@InjectModel(ChatSession.name) private chatSessionModel: Model<ChatSessionDocument>) {}

  async create(createChatSessionDto: CreateChatSessionDto): Promise<ChatSession> {
    const chatSession = new this.chatSessionModel(createChatSessionDto);
    return chatSession.save();
  }

  async findAll(): Promise<ChatSession[]> {
    return this.chatSessionModel.find().exec();
  }

  async findOne(id: string): Promise<ChatSession> {
    const chatSession = await this.chatSessionModel.findById(id).exec();
    if (!chatSession) {
      throw new NotFoundException('Chat session not found');
    }
    return chatSession;
  }
}
