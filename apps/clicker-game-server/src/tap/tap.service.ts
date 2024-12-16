import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TapServiceBase } from "./base/tap.service.base";

@Injectable()
export class TapService extends TapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
