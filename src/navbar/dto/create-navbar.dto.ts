import { IsString,IsOptional } from "class-validator";

export class navbarDto {
  @IsOptional()
  @IsString()
  name:string


  @IsOptional()
  @IsString()
  url:string
}
