import { UsersService } from "../users/users.service";
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from "../users/dto/create-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly userService;
    private readonly configService;
    private readonly jwtService;
    private readonly prisma;
    constructor(userService: UsersService, configService: ConfigService, jwtService: JwtService, prisma: PrismaService);
    register(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        avatarUrl: string | null;
        role: import("generated/prisma/client").Role;
        balance: number;
        createdAt: Date;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshToken(userId: string, refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateRefreshToken(userId: string, hashedRefreshToken: string | null): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        name: string;
        avatarUrl: string | null;
        role: import("generated/prisma/client").Role;
        balance: number;
        createdAt: Date;
        updatedAt: Date;
        hashedRefreshToken: string | null;
        bankName: string | null;
        bankAccountNumber: string | null;
        bankAccountName: string | null;
        isSuspended: boolean;
        suspendedReason: string | null;
        suspendedAt: Date | null;
    }>;
    private generateAccessToken;
    private generateRefreshToken;
    private hashToken;
}
