import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, collection: 'users' })
export class User {
  // Generate a unique stable id if the client does not supply one
  @Prop({
    unique: true,
    required: true,
    default: () => new Types.ObjectId().toString(),
  })
  userId!: string;

  @Prop({ unique: true, })  // Đảm bảo username luôn có giá trị và là unique
  username!: string;

  @Prop()
  image?: string;

  @Prop({ unique: true, })  // Đảm bảo email luôn có giá trị và là unique
  email!: string;

  @Prop({ })
  password!: string;

  @Prop({ default: 'user' })
  role!: string;

  @Prop({ default: 'local' })
  accountType!: string;

  @Prop({ default: false })
  isActive!: boolean;

  @Prop()
  lastLogin?: Date;

  @Prop()
  codeId?: string;

  @Prop()
  codeExpire?: Date;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
