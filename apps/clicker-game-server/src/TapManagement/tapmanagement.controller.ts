import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TapManagementService } from "./tapmanagement.service";

@swagger.ApiTags("tapManagements")
@common.Controller("tapManagements")
export class TapManagementController {
  constructor(protected readonly service: TapManagementService) {}
}
