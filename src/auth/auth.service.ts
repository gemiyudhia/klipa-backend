import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'generated/prisma/client';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  async logout(userId: string) {
    await this.updateRefreshToken(userId, null);

    return {
      message: 'Logout Successfully',
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);

    if (!user) throw new UnauthorizedException('Invalid email or password');

    if (user.isSuspended)
      throw new ForbiddenException(
        'Akun Anda telah disuspend. Hubungi admin untuk informasi lebih lanjut.',
      );

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.passwordHash,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid email or password');

    const accessToken = await this.generateAccessToken(user);
    const refreshToken = await this.generateRefreshToken(user);
    const hashedRefreshToken = await this.hashToken(refreshToken);

    await this.updateRefreshToken(user.id, hashedRefreshToken);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.findOneWithAuthFields(userId);

    if (!user || !user.hashedRefreshToken) {
      throw new UnauthorizedException('Akses ditolak');
    }

    if (user.isSuspended) {
      throw new ForbiddenException('Akun Anda telah disuspend');
    }

    const incomingHash = this.hashToken(refreshToken);
    const isRefreshTokenValid = incomingHash === user.hashedRefreshToken;

    if (!isRefreshTokenValid) {
      throw new UnauthorizedException('Refresh token tidak valid');
    }

    const newAccessToken = await this.generateAccessToken(user);
    const newRefreshToken = await this.generateRefreshToken(user);
    const newHashedRefreshToken = this.hashToken(newRefreshToken);

    await this.updateRefreshToken(user.id, newHashedRefreshToken);

    return {
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
    };
  }

  async updateRefreshToken(userId: string, hashedRefreshToken: string | null) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRefreshToken,
      },
    });
  }

  private async generateAccessToken(user: Pick<User, 'id' | 'email' | 'role'>) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: '15m',
    });
  }

  private async generateRefreshToken(
    user: Pick<User, 'id' | 'email' | 'role'>,
  ) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN') || '7d',
    });
  }

  private hashToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
}
