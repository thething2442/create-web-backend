import {
  IsString,
  IsArray,
  IsOptional,
  IsIn,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

// Nested DTO for call-to-action buttons
export class CallToActionDTO {
  @IsString()
  primary: string;

  @IsOptional()
  @IsString()
  secondary?: string;
}

// Nested DTO for each pricing tier
export class CtaPricingTierDTO {
  @IsIn(['free', 'basic', 'premium'])
  planId: 'free' | 'basic' | 'premium';

  @IsString()
  planName: string;

  @IsString()
  price: string;

  @IsString()
  idealFor: string;

  @IsString()
  concept: string;

  @IsArray()
  @IsString({ each: true })
  features: string[];

  @ValidateNested()
  @Type(() => CallToActionDTO)
  callToAction: CallToActionDTO;
}

// Main DTO for creating a CTA
export class CreateCtaDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  planName: string;

  @IsString()
  benefits: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CtaPricingTierDTO)
  tiers: CtaPricingTierDTO[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  footerNotes?: string[];
}
