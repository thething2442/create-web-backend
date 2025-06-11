import { IsString,IsOptional } from "class-validator";

export class CreateTableOfContentDto{
    @IsString()
    @IsOptional()
    post:string

    @IsString()
    @IsOptional()
    title:string

    @IsString()
    @IsOptional()
    description:string


  
    @IsString()
    @IsOptional()
    imageSource:string



    @IsString()
    @IsOptional()
    subcontent:string

    @IsString()
    @IsOptional()
    datepublish:string

}