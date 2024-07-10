import { Module } from "@nestjs/common";
import { PlayerManagementService } from "./playermanagement.service";
import { PlayerManagementController } from "./playermanagement.controller";
import { PlayerManagementResolver } from "./playermanagement.resolver";

@Module({
  controllers: [PlayerManagementController],
  providers: [PlayerManagementService, PlayerManagementResolver],
  exports: [PlayerManagementService],
})
export class PlayerManagementModule {}
