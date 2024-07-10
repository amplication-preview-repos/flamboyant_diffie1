import * as graphql from "@nestjs/graphql";
import { ClubManagementService } from "./clubmanagement.service";

export class ClubManagementResolver {
  constructor(protected readonly service: ClubManagementService) {}
}
