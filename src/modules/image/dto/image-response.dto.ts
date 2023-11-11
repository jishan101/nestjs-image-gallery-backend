import { ApiResponseProperty } from '@nestjs/swagger';
import { BaseResponseDTO } from '../../shared/dto/base-response.dto';

export class ImageResponseDTO extends BaseResponseDTO {
  @ApiResponseProperty()
  imgBBId: string;

  @ApiResponseProperty()
  fileName: string;

  @ApiResponseProperty()
  url: string;
}
