import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatMessageDocument = HydratedDocument<ChatMessage>;

@Schema({ timestamps: true })
export class ChatMessage {
  @Prop({ required: true, ref: 'ChatSession' })
  sessionId: string; // Tham chiếu đến ChatSession

  @Prop({ type: [{ sender: String, text: String, timestamp: Date, metadata: Object }] })
  messages: Array<{ sender: string, text: string, timestamp: Date, metadata: object }>;

  constructor(sessionId: string, messages: Array<{ sender: string, text: string, timestamp: Date, metadata: object }>) {
    this.sessionId = sessionId;
    this.messages = messages;
  }
}

export const ChatMessageSchema = SchemaFactory.createForClass(ChatMessage);
