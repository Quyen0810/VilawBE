import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLog, UserLogDocument } from './schemas/Userlog.schema';
import { CreateUserLogDto } from './dto/create-userlog.dto';

@Injectable()
export class UserLogsService {
  constructor(@InjectModel(UserLog.name) private userLogModel: Model<UserLogDocument>) {}

  async create(createUserLogDto: CreateUserLogDto): Promise<UserLog> {
    const userLog = new this.userLogModel(createUserLogDto);
    return userLog.save();
  }

  async findAll(): Promise<UserLog[]> {
    return this.userLogModel.find().exec();
  }
}
