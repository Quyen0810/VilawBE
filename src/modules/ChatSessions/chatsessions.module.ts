import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatSessionsController } from './chatsessions.controller';
import { ChatSessionsService } from './chatsessions.service';
import { ChatSession, ChatSessionSchema } from './schemas/chatsession.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ChatSession.name, schema: ChatSessionSchema }])],
  controllers: [ChatSessionsController],
  providers: [ChatSessionsService],
})
export class ChatSessionsModule {}
