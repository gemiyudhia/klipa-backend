import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
  Res,
  Patch,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuards } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtRefreshGuard } from '../common/guards/jwt-refresh.guard';
import { Throttle } from '@nestjs/throttler';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GoogleAuthGuard } from '../common/guards/google-auth.guard';
import type { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Daftar akun baru sebagai Creator atau Clipper' })
  @ApiResponse({ status: 201, description: 'Registrasi berhasil' })
  @ApiResponse({
    status: 400,
    description: 'Validasi gagal atau mencoba daftar sebagai ADMIN',
  })
  @Throttle({
    default: { limit: process.env.NODE_ENV === 'test' ? 1000 : 5, ttl: 60000 },
  })
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login dan mendapatkan access & refresh token' })
  @ApiResponse({ status: 201, description: 'Login berhasil' })
  @ApiResponse({ status: 401, description: 'Email atau password salah' })
  @ApiResponse({ status: 403, description: 'Akun disuspend' })
  @Throttle({
    default: { limit: process.env.NODE_ENV === 'test' ? 1000 : 5, ttl: 60000 },
  })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout dan invalidasi refresh token' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuards)
  logout(@Request() req: any) {
    return this.authService.logout(req.user.sub);
  }

  @Post('refresh')
  @ApiOperation({
    summary:
      'Perbarui access token menggunakan refresh token (dengan rotation)',
  })
  @ApiResponse({ status: 201, description: 'Token baru diterbitkan' })
  @ApiResponse({
    status: 401,
    description: 'Refresh token tidak valid atau sudah dipakai',
  })
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  @UseGuards(JwtRefreshGuard)
  refresh(@CurrentUser() user: { sub: string; refreshToken: string }) {
    return this.authService.refreshToken(user.sub, user.refreshToken);
  }

  @Get('me')
  @ApiOperation({ summary: 'Ambil profil user yang sedang login' })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuards)
  getProfile(@CurrentUser('sub') userId: string) {
    return this.authService.getProfile(userId);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthCallback(@Request() req: any, @Res() res: Response) {
    const result = await this.authService.validateGoogleUser(req.user);

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const redirectPath = result.needsRoleSelection ? '/select-role' : '/';

    const params = new URLSearchParams({
      access_token: result.access_token,
      refresh_token: result.refresh_token,
    });

    res.redirect(`${frontendUrl}${redirectPath}?${params.toString()}`);
  }

  @Patch('select-role')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuards)
  selectRole(
    @CurrentUser('sub') userId: string,
    @Body() dto: { role: 'CREATOR' | 'CLIPPER' },
  ) {
    return this.authService.selectRole(userId, dto.role);
  }
}
