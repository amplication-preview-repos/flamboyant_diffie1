import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClickEventServiceBase } from "./base/clickEvent.service.base";

@Injectable()
export class ClickEventService extends ClickEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
