import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { bootstrapServer2 } from './server2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);

  await bootstrapServer2();
}
bootstrap();
