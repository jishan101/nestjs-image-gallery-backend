import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResponseDTO } from '../shared/dto/delete-response.dto';
import { CreateImageDTO } from './dto/create-image.dto';
import { ImageResponseDTO } from './dto/image-response.dto';
import { ImageService } from './image.service';

@ApiTags('Image APIs')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ImageResponseDTO })
  @Post('create')
  public createImage(@Body() body: CreateImageDTO) {
    return this.imageService.createImage(body);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ImageResponseDTO, isArray: true })
  @Get('all')
  public getAllImages() {
    return this.imageService.getAllImages();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ImageResponseDTO })
  @Get('details/:id')
  public getImageById(@Param('id') id: string) {
    return this.imageService.getImageById(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: DeleteResponseDTO })
  @Delete('delete/:id')
  public deleteImage(@Param('id') id: string) {
    return this.imageService.deleteImage(id);
  }
}
