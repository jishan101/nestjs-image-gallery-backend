import { ApiResponseProperty } from '@nestjs/swagger';

export class BaseResponseDTO {
  @ApiResponseProperty()
  _id: string;

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty()
  updatedAt: Date;

  @ApiResponseProperty()
  isActive: boolean;

  @ApiResponseProperty()
  __v: number;
}
