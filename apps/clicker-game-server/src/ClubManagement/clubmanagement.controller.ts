import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ClubManagementService } from "./clubmanagement.service";

@swagger.ApiTags("clubManagements")
@common.Controller("clubManagements")
export class ClubManagementController {
  constructor(protected readonly service: ClubManagementService) {}
}
