import { Module } from "@nestjs/common";
import { ReferralManagementService } from "./referralmanagement.service";
import { ReferralManagementController } from "./referralmanagement.controller";
import { ReferralManagementResolver } from "./referralmanagement.resolver";

@Module({
  controllers: [ReferralManagementController],
  providers: [ReferralManagementService, ReferralManagementResolver],
  exports: [ReferralManagementService],
})
export class ReferralManagementModule {}
