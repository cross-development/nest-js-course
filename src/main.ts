// Core
import { NestFactory } from '@nestjs/core';
// Packages
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// Modules
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest.JS backend course')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  const PORT = process.env.PORT || 5000;

  await app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
};

bootstrap();
