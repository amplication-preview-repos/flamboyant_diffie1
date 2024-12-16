import * as graphql from "@nestjs/graphql";
import { TapResolverBase } from "./base/tap.resolver.base";
import { Tap } from "./base/Tap";
import { TapService } from "./tap.service";

@graphql.Resolver(() => Tap)
export class TapResolver extends TapResolverBase {
  constructor(protected readonly service: TapService) {
    super(service);
  }
}
