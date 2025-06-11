import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { SearchUserDto } from './dto/search.dto';
import { LoginUserDto } from './dto/login.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) { }

  @UseGuards()
  @Get()
  findall() {
    return this.usersService.getUserAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  // Search by email via query param GET /users/search?email=...
  @UseGuards(JwtAuthGuard)
  @Get('search')
  searchUserByEmail(@Query('email') email?: any) {
    return this.usersService.getUserByEmail(email);
  }

  // Search by email via POST body { email: "..." }
  @Post('search')
  async searchUser(@Body() dto: SearchUserDto) {
    return this.usersService.findByEmail(dto);
  }

  @Post('login')
  async loginUser(@Body() dto: LoginUserDto){
    return this.usersService.Login(dto)
  }
}
