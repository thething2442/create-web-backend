// src/websites/dto/website.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, IsEnum, IsArray, IsUrl, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
export enum ThemeOption {
  MODERN = "modern",
  CLASSIC = "classic",
  MINIMAL = "minimal",
}

class PageDto {
  @ApiProperty({ description: 'Unique identifier for the page' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Display name of the page' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'URL friendly slug for the page' })
  @IsString()
  slug: string;
}

class NavLinkDto {
  @ApiProperty({ description: 'Text displayed for the navigation link' })
  @IsString()
  text: string;

  @ApiProperty({ description: 'The ID of the page this link points to' })
  @IsUUID()
  pageId: string; 

  @ApiProperty({ description: 'Order of the link in the navigation menu' })
  @IsOptional()
  @Type(() => Number)
  order?: number;
}
export class createWebdatumDto {
  @ApiProperty({ description: 'Unique identifier for the website' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Name of the website' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Optional custom domain for the website' })
  @IsOptional()
  @IsString()
  domain?: string;

  @ApiProperty({ description: 'Brief description of the website' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'ID of the user who owns this website' })
  @IsUUID()
  ownerUserId: string;

  @ApiProperty({ enum: ThemeOption, description: 'Available theme options' })
  @IsEnum(ThemeOption)
  theme: ThemeOption;

  @ApiProperty({ description: 'Primary brand color (hex code)', example: '#3498db' })
  @IsString()
  primaryColor: string; 

  @ApiProperty({ description: 'Secondary brand color (hex code)', example: '#2ecc71' })
  @IsString()
  secondaryColor: string;

  @ApiProperty({ description: 'Main font family for the website' })
  @IsString()
  fontFamily: string;

  @ApiProperty({ description: 'URL to the website\'s logo image' })
  @IsOptional()
  @IsUrl()
  logoUrl?: string; 

  @ApiProperty({ description: 'URL to the website\'s favicon' })
  @IsOptional()
  @IsUrl()
  faviconUrl?: string;

  @ApiProperty({ type: [PageDto], description: 'List of all pages composing the website' })
  @IsArray()
  @Type(() => PageDto)
  pages: PageDto[];

  @ApiProperty({ type: [NavLinkDto], description: 'Links displayed in the main navigation menu' })
  @IsOptional()
  @IsArray()
  @Type(() => NavLinkDto)
  navigationLinks?: NavLinkDto[];

  @ApiProperty({ description: 'Google Analytics tracking ID' })
  @IsOptional()
  @IsString()
  googleAnalyticsId?: string;

  @ApiProperty({ description: 'Custom HTML to inject into the <head> section' })
  @IsOptional()
  @IsString()
  customHeadHtml?: string;

  @ApiProperty({ description: 'Publishing status of the website' })
  @IsBoolean()
  isPublished: boolean;

  @ApiProperty({ description: 'Timestamp of the last publish action' })
  @IsOptional()
  @IsString() // Typically represented as ISO string for dates
  lastPublishedAt?: string; // Use camelCase for TS
}
