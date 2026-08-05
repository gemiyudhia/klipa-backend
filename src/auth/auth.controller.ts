import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuards } from 'src/common/guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtRefreshGuard } from 'src/common/guards/jwt-refresh.guard';
import { Throttle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @Throttle({
    default: { limit: process.env.NODE_ENV === 'test' ? 1000 : 5, ttl: 60000 },
  })
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  @Throttle({
    default: { limit: process.env.NODE_ENV === 'test' ? 1000 : 5, ttl: 60000 },
  })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuards)
  logout(@Request() req: any) {
    return this.authService.logout(req.user.sub);
  }

  @Post('refresh')
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  @UseGuards(JwtRefreshGuard)
  refresh(@CurrentUser() user: { sub: string; refreshToken: string }) {
    return this.authService.refreshToken(user.sub, user.refreshToken);
  }
}
