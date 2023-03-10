import { Module } from "@nestjs/common";
import { HyperController } from "./hyper.controller";
import { HyperService } from "./hyper.service";

@Module({
  imports: [],
  controllers: [HyperController],
  providers: [HyperService]
})
export class HyperModule {
}