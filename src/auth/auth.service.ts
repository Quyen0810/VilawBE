import { Injectable, Dependencies, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';
import { comparePasswordHelper } from '@/helper/ultis';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordAuthDto, CodeAuthDto, CreateAuthDto } from './dto/create-auth.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(username,);
    if (!user) return null;
    const isValidPassword = await comparePasswordHelper(pass, user!.password);

    if (!isValidPassword) return null;
    return user;

  }

  async login(user: any, res: Response) {
    const payload = { username: user.email, sub: user._id };
    const token = this.jwtService.sign(payload);

    const isProd = process.env.NODE_ENV === 'production';

    // SET COOKIE Ở ĐÂY
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: isProd,                 // Render = true, localhost = false
      sameSite: isProd ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      user: {
        email: user.email,
        username: user.username,
        _id: user._id,
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  handleRegister = async (registerDto: CreateAuthDto) => {
    return await this.userService.handleRegister(registerDto);
  }

  checkCode = async (data: CodeAuthDto) => {
    return await this.userService.handleActive(data);
  }

  retryActive = async (data: string) => {
    return await this.userService.retryActive(data);
  }

  retryPassword = async (data: string) => {
    return await this.userService.retryPassword(data);
  }

  changePassword = async (data: ChangePasswordAuthDto) => {
    return await this.userService.changePassword(data);
  }


}
