import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BoostManagementService } from "./boostmanagement.service";

@swagger.ApiTags("boostManagements")
@common.Controller("boostManagements")
export class BoostManagementController {
  constructor(protected readonly service: BoostManagementService) {}
}
