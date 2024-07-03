// hello.dto.ts
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class HelloDto {
  @IsOptional()
  @IsString()
  ip: string;

  @IsOptional()
  @IsNumber()
  temperature: number;

  @IsOptional()
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  name: string;
}
