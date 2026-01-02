import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local-auth.guards';
import { Public, ResponseMessage } from '@/decorator/customize';
import { ChangePasswordAuthDto, CodeAuthDto, CreateAuthDto } from './dto/create-auth.dto';
import { MailerService } from '@nestjs-modules/mailer';



@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mailerService: MailerService,
  ) {}

  @Post("llogin")
  @Public()
  @UseGuards(LocalAuthGuard)
  @ResponseMessage("Fetch Login")
  handleLogin(
    @Request() req: any,
    @Res({ passthrough: true }) res: Response,
  )  {
    return this.authService.login(req.user, res);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Post("register")
  @Public()
  register(@Body() registerDto: CreateAuthDto) {
    return this.authService.handleRegister(registerDto);
  }


  @Post('check-code')
  @Public()
  checkCode(@Body() data: CodeAuthDto) {
    return this.authService.checkCode(data);
  }

  @Post('retry-active')
  @Public()
  retryActive(@Body("email") email: string) {
    return this.authService.retryActive(email);
  }

  @Post('retry-password')
  @Public()
  retryPassword(@Body("email") email: string) {
    return this.authService.retryPassword(email);
  }



  @Post('change-password')
  @Public()
  changePassword(@Body() data: ChangePasswordAuthDto) {
    return this.authService.changePassword(data);
  }


   @Get("mail")
  @Public()
  testMail() {
    this.mailerService.sendMail({
      to: 'congbangnamodau@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email sent from NestJS application.',
     template: "register", 
     context: {
        name: "ViLaw",
        activationCode: 1234567
     }
    })
    return "ok";
  }

}
