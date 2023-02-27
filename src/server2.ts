import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrapServer2() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4001);
}
