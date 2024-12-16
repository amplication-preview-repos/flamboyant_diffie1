import { Module } from "@nestjs/common";
import { BoostManagementService } from "./boostmanagement.service";
import { BoostManagementController } from "./boostmanagement.controller";
import { BoostManagementResolver } from "./boostmanagement.resolver";

@Module({
  controllers: [BoostManagementController],
  providers: [BoostManagementService, BoostManagementResolver],
  exports: [BoostManagementService],
})
export class BoostManagementModule {}
