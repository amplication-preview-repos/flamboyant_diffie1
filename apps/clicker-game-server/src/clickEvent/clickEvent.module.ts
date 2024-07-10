import { Module } from "@nestjs/common";
import { ClickEventModuleBase } from "./base/clickEvent.module.base";
import { ClickEventService } from "./clickEvent.service";
import { ClickEventController } from "./clickEvent.controller";
import { ClickEventResolver } from "./clickEvent.resolver";

@Module({
  imports: [ClickEventModuleBase],
  controllers: [ClickEventController],
  providers: [ClickEventService, ClickEventResolver],
  exports: [ClickEventService],
})
export class ClickEventModule {}
