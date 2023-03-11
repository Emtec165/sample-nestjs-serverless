import { Module } from "@nestjs/common";
import { HyperController } from "./hyper.controller";
import { HyperService } from "./hyper.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hyper } from "./hyper.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Hyper])],
  controllers: [HyperController],
  providers: [HyperService]
})
export class HyperModule {
}