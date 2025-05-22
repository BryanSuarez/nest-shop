import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number;

  @IsNumber()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  offset?: number;
}
