import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty } from 'class-validator';

export class ImageDeleteQueryDto {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  @Transform((x: { value: string }) =>
    x.value ? x.value.trim().split(',') : x.value,
  )
  ids: string[];
}
