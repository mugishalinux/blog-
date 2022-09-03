import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
  .setTitle('Citizen Service Endpoints')
  .setDescription('The citizen apis')
  .setVersion('1.0.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('/', app, document);
app.enableCors();
  await app.listen(3002);
}
bootstrap();
