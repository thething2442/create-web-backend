import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt"; // <- ADD THIS
import db from "../turso/config";
import { users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { CreateUserDto } from "./dto/create-user.dto";
import { InferInsertModel } from "drizzle-orm";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from "./dto/login.dto";
import { SearchUserDto } from "./dto/search.dto";
type NewUser = InferInsertModel<typeof users>;

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {} // <- ADD THIS
  async createUser(dto: CreateUserDto) {
  try {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser: NewUser = {
      id: uuidv4(),
      email: dto.email ?? null,
      password: hashedPassword,
      user_name: dto.user_name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await db.insert(users).values(newUser).returning();
    return result[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
  
}
  async getUserByEmail(email: string) {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0];
  }
  async getUserAll(){
    const result = await db.select().from(users)
    return result
  }
  async getUserById(id: string) {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async deleteUser(id: string) {
    await db.delete(users).where(eq(users.id, id));
    return { message: "User deleted" };
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const result = await db
      .update(users)
      .set({
        ...updateUserDto,
        updatedAt: new Date().toISOString(),
      })
      .where(eq(users.id, id))
      .returning();

    return result[0];
  }

  async Login(dto: LoginUserDto) {
    const user = await this.getUserByEmail(dto.email);
    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }
  async SearchUserByEmail(dto:SearchUserDto){
    const searchUser = await db.select().from(users).where(eq(users.email,dto.email))
    return searchUser
  }

  async findByEmail(dto: SearchUserDto) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, dto.email))
      .limit(1);
    return result[0] || null;
  }
  
}
