import { UpdateAuthDto } from './dto/update-auth.dto';
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
        name: string;
        email: string;
        id: string;
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
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    updateRefreshToken(userId: string, hashedRefreshToken: string | null): Promise<{
        name: string;
        email: string;
        id: string;
        passwordHash: string;
        avatarUrl: string | null;
        role: import("generated/prisma/client").Role;
        balance: number;
        createdAt: Date;
        updatedAt: Date;
        hashedRefreshToken: string | null;
    }>;
    private generateAccessToken;
}
