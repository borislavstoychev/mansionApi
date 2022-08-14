import {
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors({
    origin: true,
    allowedHeaders:
      'Content-Type,Accept,Authorization',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Mansion Task')
    .setDescription(
      'The required task from Mansion',
    )
    .setVersion('1.0')
    .addTag('mansion')
    .build();
  const document = SwaggerModule.createDocument(
    app,
    config,
  );
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3310;
  await app.listen(port, () => {
    Logger.debug(
      `Listening at http://localhost:${port}`,
      'bootstrap',
    );
    Logger.debug(
      `Listening at http://localhost:${port}/swagger`,
      'bootstrap',
    );
  });
}
bootstrap();
