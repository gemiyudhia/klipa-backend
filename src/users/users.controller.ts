import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuards } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { TopUpDto } from './dto/topup.dto';
import { Role } from '../../generated/prisma/enums';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Membuat pengguna baru',
    description: 'Endpoint untuk registrasi atau membuat user baru.',
  })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User berhasil dibuat.',
  })
  @ApiResponse({
    status: 409,
    description: 'Email sudah digunakan.',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Mengambil data user berdasarkan ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID user',
    example: 'f3a6e8d2-7c5e-4c7a-9c3d-1d3d4f5e6a7b',
  })
  @ApiResponse({
    status: 200,
    description: 'Data user berhasil ditemukan.',
  })
  @ApiResponse({
    status: 404,
    description: 'User tidak ditemukan.',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Mengubah data user',
  })
  @ApiParam({
    name: 'id',
    description: 'ID user yang akan diperbarui',
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'Data user berhasil diperbarui.',
  })
  @ApiResponse({
    status: 404,
    description: 'User tidak ditemukan.',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Menghapus user',
    description: 'Hanya dapat dilakukan oleh ADMIN.',
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuards, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiParam({
    name: 'id',
    description: 'ID user yang akan dihapus',
  })
  @ApiResponse({
    status: 200,
    description: 'User berhasil dihapus.',
  })
  @ApiResponse({
    status: 403,
    description: 'Akses ditolak. Hanya ADMIN.',
  })
  @ApiResponse({
    status: 404,
    description: 'User tidak ditemukan.',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch('me/topup')
  @ApiOperation({
    summary: 'Top-up saldo (placeholder, akan diganti payment gateway)',
    description: 'Menambahkan saldo ke akun pengguna yang sedang login.',
  })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: TopUpDto })
  @ApiResponse({
    status: 200,
    description: 'Saldo berhasil ditambahkan.',
  })
  @ApiResponse({
    status: 401,
    description: 'Token tidak valid atau belum login.',
  })
  @UseGuards(JwtAuthGuards)
  topUp(@CurrentUser('sub') userId: string, @Body() topUpDto: TopUpDto) {
    return this.usersService.topUp(userId, topUpDto.amount);
  }
}
