import { Module } from "@nestjs/common";
import { TapModuleBase } from "./base/tap.module.base";
import { TapService } from "./tap.service";
import { TapController } from "./tap.controller";
import { TapResolver } from "./tap.resolver";

@Module({
  imports: [TapModuleBase],
  controllers: [TapController],
  providers: [TapService, TapResolver],
  exports: [TapService],
})
export class TapModule {}
