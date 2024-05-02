import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // this guards check if the credentials of correct
  @UseGuards(LocalAuthGuard)
  // post to /auth/login endpoint
  @Post('login')
  async login(@Request() request: Request & { user: any }) {
    return this.authService.login(request.user);
  }
}
