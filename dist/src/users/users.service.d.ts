import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
        balance: number;
        createdAt: Date;
    }>;
    findAll(): string;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
        balance: number;
        createdAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        name: string;
        email: string;
        id: string;
        passwordHash: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
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
    } | null>;
    remove(id: string): Promise<string>;
    findOne(id: string): Promise<{
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
    }>;
    topUp(userId: string, amount: number): Promise<{
        name: string;
        email: string;
        id: string;
        passwordHash: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
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
    findOneWithAuthFields(id: string): Promise<{
        name: string;
        email: string;
        id: string;
        role: import("../../generated/prisma/enums").Role;
        hashedRefreshToken: string | null;
        isSuspended: boolean;
    } | null>;
}
