import { Module } from '@nestjs/common';
import { MongoModule } from './database/mongo/mongo.module';
import { ConfigModule } from './modules/config/config.module';
import { ImageModule } from './modules/image/image.module';

@Module({
  imports: [ImageModule, MongoModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
