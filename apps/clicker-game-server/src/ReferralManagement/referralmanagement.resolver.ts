import * as graphql from "@nestjs/graphql";
import { ReferralManagementService } from "./referralmanagement.service";

export class ReferralManagementResolver {
  constructor(protected readonly service: ReferralManagementService) {}
}
