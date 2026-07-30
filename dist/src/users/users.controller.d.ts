import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findOne(id: string): Promise<{
        email: string;
        name: string;
        role: import("../../generated/prisma/enums").Role;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        avatarUrl: string | null;
        role: import("../../generated/prisma/enums").Role;
        balance: number;
        createdAt: Date;
    }>;
    remove(id: string): Promise<string>;
}
