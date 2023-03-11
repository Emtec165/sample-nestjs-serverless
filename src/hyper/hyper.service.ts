import { PostHypeDto } from "./post-hype.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Hyper } from "./hyper.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class HyperService {

  constructor(@InjectRepository(Hyper) private repository: Repository<Hyper>) {
  }

  getHype(): string {
    return "{be hyped}";
  }

  postHype(dto: PostHypeDto) {
    const hyper = this.repository.create(dto);
    return this.repository.save(hyper);
  }
}