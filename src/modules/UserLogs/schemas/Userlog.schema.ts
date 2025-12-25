import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserLogDocument = HydratedDocument<UserLog>;

@Schema({ timestamps: true })
export class UserLog {
  @Prop({ required: true, ref: 'User' })
  userId: string; // Tham chiếu đến User collection

  @Prop({ required: true })
  action: string; // Hành động của người dùng (ví dụ: "login")

  @Prop({ required: true })
  timestamp: Date;

  @Prop()
  ipAddress: string; // Địa chỉ IP của người dùng khi thực hiện hành động

  constructor(userId: string, action: string, timestamp: Date, ipAddress: string) {
    this.userId = userId;
    this.action = action;
    this.timestamp = timestamp;
    this.ipAddress = ipAddress;
  }
}

export const UserLogSchema = SchemaFactory.createForClass(UserLog);
