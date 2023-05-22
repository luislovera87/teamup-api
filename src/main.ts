import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Teamup')
    .setDescription('The Teamup API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('teams')
    .addTag('sports')
    .addTag('leagues')
    .addTag('tournaments')
    .addTag('categories')
    .build();
  const document = SwaggerModule.createDocument(app, config, { extraModels: []});
  SwaggerModule.setup('api', app, document);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3000);
}
bootstrap();
