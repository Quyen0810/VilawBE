import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UsersModule } from '@/modules/users/users.module';
import { UserLogsModule } from '@/modules/UserLogs/userlogs.module';
import { ChatSessionsModule } from '@/modules/ChatSessions/chatsessions.module';
import { ChatMessagesModule } from '@/modules/ChatMessages/chatmessages.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsModule } from '@/modules/reviews/reviews.module';
import { AuthModule } from '@/auth/auth.module';
import { JwtAuthGuard } from '@/auth/passport/jwt-auth.guard';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { TransformInterceptor } from '@/core/transform.interceptor';

@Module({
  imports: [
    UsersModule,
    UserLogsModule,
    ChatSessionsModule,
    ChatMessagesModule,
    ReviewsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          port: Number(config.get('MAIL_PORT')),
          secure: false, // BẮT BUỘC false với 587
          auth: {
            user: config.get('MAIL_USER'), // apikey
            pass: config.get('MAIL_PASSWORD'), // SG.xxx
          },
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_USER')}>`,
        },
        template: {
          dir: process.cwd() + '/src/mail/templates/',
          adapter: new HandlebarsAdapter(),
          options: { strict: true },
        },
      }),
    })
    


  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: TransformInterceptor,
    }
  ],
})
export class AppModule { }
