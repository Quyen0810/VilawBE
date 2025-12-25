import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ChatSessionDocument = HydratedDocument<ChatSession>;

@Schema({ timestamps: true, collection: 'chatsessions' })
export class ChatSession {
  @Prop({ required: true, ref: 'User' })
  userId?: string; // Tham chiếu đến User collection

  @Prop({ required: true })
  sessionId?: string; // Mã phiên trò chuyện

  @Prop({ required: true })
  startTime?: Date;

  @Prop()
  endTime?: Date;

  @Prop({ default: 'tư vấn hợp đồng' })
  topic?: string;
}

export const ChatSessionSchema = SchemaFactory.createForClass(ChatSession);
