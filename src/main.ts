import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PaymentMethod } from './users/entities/payment-method.entity';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Teamup')
    .setDescription('The Teamup API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('teams')
    .addTag('sports')
    .addTag('leagues')
    .build();
  const document = SwaggerModule.createDocument(app, config, { extraModels: [PaymentMethod]});
  SwaggerModule.setup('api', app, document);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3000);
}
bootstrap();
