import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'images' })
export class Image extends Document {
  @Prop({ required: true, type: String })
  imgBBId: string;

  @Prop({ required: true, type: String })
  fileName: string;

  @Prop({ required: true, type: String })
  url: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
