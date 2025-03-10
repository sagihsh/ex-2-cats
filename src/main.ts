
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { doStuffWithCatModel } from './types/Cat';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  doStuffWithCatModel();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();