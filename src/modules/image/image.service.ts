import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { ResponseHelper } from '../shared/util/response-helper.util';
import { CreateImageDTO } from './dto/create-image.dto';
import { Image } from './schema/image.schema';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image.name)
    private readonly imageModel: Model<Image>,
  ) {}

  public async createImage(body: CreateImageDTO) {
    const newImage = new this.imageModel(body);
    return await newImage.save();
  }

  public getAllImages() {
    return this.imageModel.find();
  }

  public async getImageById(id: string | Schema.Types.ObjectId) {
    const image = await this.imageModel.findById(id);
    if (!image) {
      throw new NotFoundException(`Image does not exist.`);
    }

    return image;
  }

  public async deleteImage(id: string | Schema.Types.ObjectId) {
    await this.getImageById(id);

    const deletedImage = await this.imageModel.findByIdAndDelete(id);

    return ResponseHelper.deleteResponse(deletedImage ? true : false);
  }
}
