import * as graphql from "@nestjs/graphql";
import { ClickEventResolverBase } from "./base/clickEvent.resolver.base";
import { ClickEvent } from "./base/ClickEvent";
import { ClickEventService } from "./clickEvent.service";

@graphql.Resolver(() => ClickEvent)
export class ClickEventResolver extends ClickEventResolverBase {
  constructor(protected readonly service: ClickEventService) {
    super(service);
  }
}
