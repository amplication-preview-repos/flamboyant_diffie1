/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Tap } from "./Tap";
import { TapCountArgs } from "./TapCountArgs";
import { TapFindManyArgs } from "./TapFindManyArgs";
import { TapFindUniqueArgs } from "./TapFindUniqueArgs";
import { CreateTapArgs } from "./CreateTapArgs";
import { UpdateTapArgs } from "./UpdateTapArgs";
import { DeleteTapArgs } from "./DeleteTapArgs";
import { TapService } from "../tap.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tap)
export class TapResolverBase {
  constructor(
    protected readonly service: TapService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tap",
    action: "read",
    possession: "any",
  })
  async _tapsMeta(
    @graphql.Args() args: TapCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tap])
  @nestAccessControl.UseRoles({
    resource: "Tap",
    action: "read",
    possession: "any",
  })
  async taps(@graphql.Args() args: TapFindManyArgs): Promise<Tap[]> {
    return this.service.taps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tap, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tap",
    action: "read",
    possession: "own",
  })
  async tap(@graphql.Args() args: TapFindUniqueArgs): Promise<Tap | null> {
    const result = await this.service.tap(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tap)
  @nestAccessControl.UseRoles({
    resource: "Tap",
    action: "create",
    possession: "any",
  })
  async createTap(@graphql.Args() args: CreateTapArgs): Promise<Tap> {
    return await this.service.createTap({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tap)
  @nestAccessControl.UseRoles({
    resource: "Tap",
    action: "update",
    possession: "any",
  })
  async updateTap(@graphql.Args() args: UpdateTapArgs): Promise<Tap | null> {
    try {
      return await this.service.updateTap({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tap)
  @nestAccessControl.UseRoles({
    resource: "Tap",
    action: "delete",
    possession: "any",
  })
  async deleteTap(@graphql.Args() args: DeleteTapArgs): Promise<Tap | null> {
    try {
      return await this.service.deleteTap(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
