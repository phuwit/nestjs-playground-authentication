import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  // this guards check if the credentials of correct
  @UseGuards(LocalAuthGuard)
  // post to /auth/login endpoint
  @Post('login')
  async login(@Request() request: Request & { user: any }) {
    return request.user;
  }
}
