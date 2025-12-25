import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatMessagesController } from './chatmessages.controller';
import { ChatMessagesService } from './chatmessages.service';
import { ChatMessage, ChatMessageSchema } from './schemas/chatmessage.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ChatMessage.name, schema: ChatMessageSchema }])],
  controllers: [ChatMessagesController],
  providers: [ChatMessagesService],
  exports: [ChatMessagesService],
})
export class ChatMessagesModule {}
