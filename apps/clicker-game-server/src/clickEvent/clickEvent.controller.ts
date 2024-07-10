import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClickEventService } from "./clickEvent.service";
import { ClickEventControllerBase } from "./base/clickEvent.controller.base";

@swagger.ApiTags("clickEvents")
@common.Controller("clickEvents")
export class ClickEventController extends ClickEventControllerBase {
  constructor(protected readonly service: ClickEventService) {
    super(service);
  }
}
