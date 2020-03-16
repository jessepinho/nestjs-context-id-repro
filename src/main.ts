import { NestFactory, ContextIdFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { REQUEST_CONTEXT_ID } from '@nestjs/core/router/request/request-constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next: () => void) => {
    req[REQUEST_CONTEXT_ID] = ContextIdFactory.getByRequest(req);
    console.log('app.use context ID', req[REQUEST_CONTEXT_ID]);
    next();
  });

  await app.listen(3000);
}
bootstrap();
