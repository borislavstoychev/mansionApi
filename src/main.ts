import {
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const port = process.env.PORT || 3310;
  await app.listen(port, () => {
    Logger.debug(
      `Listening at http://localhost:${port}`,
      'bootstrap',
    );
  });
}
bootstrap();
