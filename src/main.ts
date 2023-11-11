import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
  const logger = new Logger('NestJS Image Gallery Backend');

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('api/v1');

  app.enableShutdownHooks();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS Image Gallery Backend')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const configService = new ConfigService();
  const port = await configService.getPortConfig();

  await app.listen(port, () =>
    logger.log(`Application listening on port: ${port}`),
  );
}
bootstrap();
