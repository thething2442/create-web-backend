import { IsString,IsOptional,IsJSON } from "class-validator";

export class CreateCommentDto{
  @IsString()
  @IsOptional()
  userId:string

  @IsString()
  @IsOptional()
  comment:string

  @IsString()
  @IsOptional()
  likes:string
}