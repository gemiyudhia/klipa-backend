import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from "../../generated/prisma/enums";
import { TopUpDto } from './dto/topup.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        avatarUrl: string | null;
        role: Role;
        balance: number;
        createdAt: Date;
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        name: string;
        email: string;
        role: Role;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        avatarUrl: string | null;
        role: Role;
        balance: number;
        createdAt: Date;
    }>;
    remove(id: string): Promise<string>;
    topUp(userId: string, topUpDto: TopUpDto): Promise<{
        name: string;
        email: string;
        id: string;
        passwordHash: string;
        avatarUrl: string | null;
        role: Role;
        balance: number;
        createdAt: Date;
        updatedAt: Date;
        hashedRefreshToken: string | null;
        bankName: string | null;
        bankAccountNumber: string | null;
        bankAccountName: string | null;
    }>;
}
