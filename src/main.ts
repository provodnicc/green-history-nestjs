import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ATGuard } from './auth/guards/AT.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.API_PORT
  const logger = new Logger('Nest Application')
  app.useGlobalGuards(new ATGuard())

  const config = new DocumentBuilder()
  .setTitle('HistoryCalculatorStore')
  .setDescription('there are HistoryCalculator description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: true,
    credentials: true
  })
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, ()=>logger.warn(`PORT: ${PORT}`));
}

bootstrap();
