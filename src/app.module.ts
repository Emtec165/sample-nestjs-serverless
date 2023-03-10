import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HyperModule } from "./hyper/hyper.module";

@Module({
  imports: [HyperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
