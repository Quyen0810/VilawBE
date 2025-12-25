import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '@/modules/users/schemas/user.schema';
import { UserLog } from '@/modules/UserLogs/schemas/Userlog.schema'; // Import UserLog
import { ChatSession } from '@/modules/ChatSessions/schemas/chatsession.schema';

export type ReviewDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user?: mongoose.Schema.Types.ObjectId; // Tham chiếu đến User collection

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UserLog.name })
  userLog?: mongoose.Schema.Types.ObjectId; // Tham chiếu đến UserLog collection

  @Prop({ required: true })
  rating?: number; // Đánh giá của người dùng (1 đến 5)

  @Prop()
  image?: string; // Hình ảnh của đánh giá (tùy chọn)

  @Prop()
  comment?: string; // Bình luận của người dùng về hoạt động (tùy chọn)

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ChatSession.name, required: true })
  chatSession?: mongoose.Schema.Types.ObjectId; // Tham chiếu đến ChatSession nếu đánh giá được tạo trong phiên chat

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'ChatMessage' })
  chatMessages?: mongoose.Schema.Types.ObjectId[]; // Tham chiếu đến nhiều ChatMessages liên quan (nếu cần)

}

export const ReviewSchema = SchemaFactory.createForClass(Review);
