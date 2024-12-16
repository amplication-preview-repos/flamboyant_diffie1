import { Module } from "@nestjs/common";
import { TapManagementService } from "./tapmanagement.service";
import { TapManagementController } from "./tapmanagement.controller";
import { TapManagementResolver } from "./tapmanagement.resolver";

@Module({
  controllers: [TapManagementController],
  providers: [TapManagementService, TapManagementResolver],
  exports: [TapManagementService],
})
export class TapManagementModule {}
