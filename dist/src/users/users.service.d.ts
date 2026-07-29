import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
        balance: number;
        createdAt: Date;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
        balance: number;
        createdAt: Date;
    }>;
    remove(id: number): string;
}
