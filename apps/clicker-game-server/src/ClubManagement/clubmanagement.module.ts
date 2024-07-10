import { Module } from "@nestjs/common";
import { ClubManagementService } from "./clubmanagement.service";
import { ClubManagementController } from "./clubmanagement.controller";
import { ClubManagementResolver } from "./clubmanagement.resolver";

@Module({
  controllers: [ClubManagementController],
  providers: [ClubManagementService, ClubManagementResolver],
  exports: [ClubManagementService],
})
export class ClubManagementModule {}
