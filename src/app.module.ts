import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HyperModule } from "./hyper/hyper.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hyper } from "./hyper/hyper.entity";
import * as process from "process";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      entities: [Hyper]
    }),
    HyperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
