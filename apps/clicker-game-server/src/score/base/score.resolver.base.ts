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
import { Score } from "./Score";
import { ScoreCountArgs } from "./ScoreCountArgs";
import { ScoreFindManyArgs } from "./ScoreFindManyArgs";
import { ScoreFindUniqueArgs } from "./ScoreFindUniqueArgs";
import { CreateScoreArgs } from "./CreateScoreArgs";
import { UpdateScoreArgs } from "./UpdateScoreArgs";
import { DeleteScoreArgs } from "./DeleteScoreArgs";
import { User } from "../../user/base/User";
import { ScoreService } from "../score.service";
@graphql.Resolver(() => Score)
export class ScoreResolverBase {
  constructor(protected readonly service: ScoreService) {}

  async _scoresMeta(
    @graphql.Args() args: ScoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Score])
  async scores(@graphql.Args() args: ScoreFindManyArgs): Promise<Score[]> {
    return this.service.scores(args);
  }

  @graphql.Query(() => Score, { nullable: true })
  async score(
    @graphql.Args() args: ScoreFindUniqueArgs
  ): Promise<Score | null> {
    const result = await this.service.score(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Score)
  async createScore(@graphql.Args() args: CreateScoreArgs): Promise<Score> {
    return await this.service.createScore({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Score)
  async updateScore(
    @graphql.Args() args: UpdateScoreArgs
  ): Promise<Score | null> {
    try {
      return await this.service.updateScore({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Score)
  async deleteScore(
    @graphql.Args() args: DeleteScoreArgs
  ): Promise<Score | null> {
    try {
      return await this.service.deleteScore(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Score): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}