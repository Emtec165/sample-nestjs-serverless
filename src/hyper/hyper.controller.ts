import { Body, Controller, Get, Post } from "@nestjs/common";
import { HyperService } from "./hyper.service";
import { PostHypeDto } from "./post-hype.dto";

@Controller("hyper")
export class HyperController {

  constructor(private service: HyperService) {
  }

  @Get()
  getHype(): string {
    return this.service.getHype();
  }

  @Post()
  postHype(@Body() body: PostHypeDto) {
    return this.service.postHype(body);
  }
}