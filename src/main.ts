import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.enableCors({
  //   origin: [
  //     'http://localhost:4200',
  //     'https://dapp.gotem.io'
  //   ],
  //   methods: ['GET', 'POST'],
  //   credentials: true,
  // });

  const documentBuilder = new DocumentBuilder()
    .setTitle('GOTEM API')
    .setDescription('GOTEM NestJS API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('api', app, document);

  config()

  await app.listen(3000);
}
bootstrap();
