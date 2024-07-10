import * as graphql from "@nestjs/graphql";
import { TapManagementService } from "./tapmanagement.service";

export class TapManagementResolver {
  constructor(protected readonly service: TapManagementService) {}
}
