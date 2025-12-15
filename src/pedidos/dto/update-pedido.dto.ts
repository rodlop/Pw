import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

class ItemDto {
  @ApiPropertyOptional({ example: 'prod_xyz' })
  @IsString()
  @IsOptional()
  productId?: string;

  @ApiPropertyOptional({ example: 2 })
  @IsNumber()
  @IsOptional()
  quantity?: number;

  @ApiPropertyOptional({ example: 9.99 })
  @IsNumber()
  @IsOptional()
  price?: number;
}

export class UpdatePedidoDto {
  @ApiPropertyOptional({ example: 'João' })
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional({ type: [ItemDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items?: ItemDto[];

  @ApiPropertyOptional({ example: 19.98 })
  @IsOptional()
  @IsNumber()
  total?: number;

  @ApiPropertyOptional({ example: 'pending' })
  @IsOptional()
  @IsString()
  status?: string;
}
