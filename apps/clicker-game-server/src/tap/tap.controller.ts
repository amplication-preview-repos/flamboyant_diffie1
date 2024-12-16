import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TapService } from "./tap.service";
import { TapControllerBase } from "./base/tap.controller.base";

@swagger.ApiTags("taps")
@common.Controller("taps")
export class TapController extends TapControllerBase {
  constructor(protected readonly service: TapService) {
    super(service);
  }
}
