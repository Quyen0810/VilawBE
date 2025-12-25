import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Email is required' })
  email!: string;

  // Some clients send `name` instead of `username` – allow it so ValidationPipe doesn't reject the payload
  @IsOptional()
  @IsString()
  name?: string;
  
  @IsOptional()
  @IsString()
  username?: string;

  @IsNotEmpty({ message: 'Password is required' })
  password!: string;
}

export class CodeAuthDto {

  @IsNotEmpty({ message: "_id không được để trống" })
  _id!: string;

  @IsNotEmpty({ message: "code không được để trống" })
  code!: string;

}

export class ChangePasswordAuthDto {
  @IsNotEmpty({ message: "code không được để trống" })
  code!: string;

  @IsNotEmpty({ message: "password không được để trống" })
  password!: string;

  @IsNotEmpty({ message: "confirmPassword không được để trống" })
  confirmPassword!: string;

  @IsNotEmpty({ message: "email không được để trống" })
  email!: string;

}
