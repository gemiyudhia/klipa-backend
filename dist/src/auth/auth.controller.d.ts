import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
        balance: number;
        createdAt: Date;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
}
