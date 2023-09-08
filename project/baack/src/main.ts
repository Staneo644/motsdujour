import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:8080', // Remplacez ceci par l'URL de votre front-end React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Activez cette option si vous avez besoin de prendre en charge les cookies en-tête (par exemple pour l'authentification JWT).
  };
 
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
