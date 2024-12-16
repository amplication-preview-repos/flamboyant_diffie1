import * as graphql from "@nestjs/graphql";
import { BoostManagementService } from "./boostmanagement.service";

export class BoostManagementResolver {
  constructor(protected readonly service: BoostManagementService) {}
}
