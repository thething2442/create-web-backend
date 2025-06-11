import { IsOptional,IsString,IsUrl } from "class-validator";

export class PostSectionDto {
  @IsString()
  section: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsUrl()
  image_url?: string;

  @IsOptional()
  @IsUrl()
  video_url?: string;
}
