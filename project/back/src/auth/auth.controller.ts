import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Get } from '@nestjs/common';

import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async loginGet(@Body() loginDto: any) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    // Appelez la méthode d'inscription dans le service d'authentification.
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: any) {
      const user = await this.authService.validateUser(loginDto.username, loginDto.password);
      if (!user) {
          throw new UnauthorizedException('Invalid credentials');
        }
    console.log("nouvelle connection : ", loginDto.username);
    return this.authService.login(user);
  }
}