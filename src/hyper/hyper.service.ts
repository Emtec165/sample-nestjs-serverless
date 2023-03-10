import { PostHypeDto } from "./post-hype.dto";

export class HyperService {

  getHype(): string {
    return "{be hyped}";
  }

  postHype(dto: PostHypeDto): PostHypeDto {
    return dto;
  }
}