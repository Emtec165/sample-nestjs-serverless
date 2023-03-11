import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HyperModule } from "./hyper/hyper.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hyper } from "./hyper/hyper.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: '127.0.0.1',
      port: 5432,
      database: "postgres",
      username: "sa",
      password: "sa",
      synchronize: true,
      entities: [Hyper]
    }),
    HyperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
