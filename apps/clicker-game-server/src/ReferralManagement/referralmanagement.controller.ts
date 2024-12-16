import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReferralManagementService } from "./referralmanagement.service";

@swagger.ApiTags("referralManagements")
@common.Controller("referralManagements")
export class ReferralManagementController {
  constructor(protected readonly service: ReferralManagementService) {}
}
