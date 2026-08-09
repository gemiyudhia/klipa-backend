import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, Role } from '../../generated/prisma/client';
import * as bcrypt from 'bcrypt';
import { buildPaginationMeta, getSkip } from '../common/utils/pagination.util';
import { PrismaService } from '../prisma/prisma.service';
import { FilterUsersDto } from '../admin/dto/filter-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const passwordHash = await bcrypt.hash(createUserDto.password, 10);

    try {
      return await this.prisma.user.create({
        data: {
          name: createUserDto.name,
          email: createUserDto.email,
          passwordHash,
          role: createUserDto.role ?? 'CLIPPER',
        },
        select: {
          id: true,
          name: true,
          email: true,
          avatarUrl: true,
          role: true,
          balance: true,
          createdAt: true,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `email ${createUserDto.email} already exits`,
        );
      }
      throw error;
    }
  }

  async findAll(query: FilterUsersDto) {
    const { page = 1, limit = 10, role, search } = query;
    const skip = getSkip(page, limit);

    const where: any = {};

    if (role) {
      where.role = role;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          balance: true,
          isSuspended: true,
          suspendedReason: true,
          createdAt: true,
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return { data, meta: buildPaginationMeta(total, page, limit) };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    const data: Prisma.UserUpdateInput = {
      name: updateUserDto.name,
      email: updateUserDto.email,
    };

    if (updateUserDto.password) {
      data.passwordHash = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        role: true,
        balance: true,
        createdAt: true,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return 'user deleted successful';
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) throw new NotFoundException(`user with id ${id} not found`);

    return user;
  }

  async topUp(userId: string, amount: number) {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.update({
        where: { id: userId },
        data: { balance: { increment: amount } },
      });

      await tx.transaction.create({
        data: {
          userId,
          amount,
          type: 'TOPUP_DEMO',
          referenceId: null,
        },
      });

      return user;
    });
  }

  async findOneWithAuthFields(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        balance: true,
        isRoleSelected: true,
        avatarUrl: true,
        isSuspended: true,
        hashedRefreshToken: true,
      },
    });
  }

  async findByGoogleId(googleId: string) {
    return this.prisma.user.findUnique({ where: { googleId } });
  }

  async linkGoogleAccount(userId: string, googleId: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { googleId },
    });
  }

  async createFromGoogle(googleProfile: {
    googleId: string;
    email: string;
    name: string;
    avatarUrl?: string;
  }) {
    return this.prisma.user.create({
      data: {
        email: googleProfile.email,
        name: googleProfile.name,
        avatarUrl: googleProfile.avatarUrl,
        googleId: googleProfile.googleId,
        passwordHash: null,
        role: 'CLIPPER', // default sementara, akan ditimpa setelah user memilih
        isRoleSelected: false,
      },
    });
  }

  async setRole(userId: string, role: 'CREATOR' | 'CLIPPER') {
    return this.prisma.user.update({
      where: { id: userId },
      data: { role, isRoleSelected: true },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isRoleSelected: true,
      },
    });
  }
}
