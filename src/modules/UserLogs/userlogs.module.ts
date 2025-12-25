import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLogsController } from './userlogs.controller';
import { UserLogsService } from './userlogs.service';
import { UserLog, UserLogSchema } from './schemas/Userlog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserLog.name, schema: UserLogSchema }])],
  controllers: [UserLogsController],
  providers: [UserLogsService],
})
export class UserLogsModule {}
