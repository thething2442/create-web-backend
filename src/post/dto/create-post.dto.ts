import { IsString, IsOptional, IsUrl, IsDateString, IsJSON } from "class-validator";

export class CreatePostDto {
  @IsOptional()
  @IsString()
  @IsJSON()
  post?: string;

  @IsOptional()
  @IsString() // JSON stringified content expected
  tableOfContents?: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  imageThumbnail?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsUrl()
  videoUrl?: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsDateString()
  publishDate?: string;

  @IsOptional()
  @IsString() // JSON stringified array expected
  tags?: string;

  @IsOptional()
  @IsString()
  creator?: string;
}
