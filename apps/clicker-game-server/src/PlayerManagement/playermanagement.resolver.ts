import * as graphql from "@nestjs/graphql";
import { PlayerLoginInput } from "../playerManagement/PlayerLoginInput";
import { PlayerDto } from "../playerManagement/PlayerDto";
import { PlayerManagementService } from "./playermanagement.service";

export class PlayerManagementResolver {
  constructor(protected readonly service: PlayerManagementService) {}

  @graphql.Mutation(() => PlayerDto)
  async AuthenticatePlayer(
    @graphql.Args()
    args: PlayerLoginInput
  ): Promise<PlayerDto> {
    return this.service.AuthenticatePlayer(args);
  }

  @graphql.Mutation(() => PlayerDto)
  async CreatePlayer(
    @graphql.Args()
    args: PlayerLoginInput
  ): Promise<PlayerDto> {
    return this.service.CreatePlayer(args);
  }

  @graphql.Mutation(() => PlayerDto)
  async DeletePlayer(
    @graphql.Args()
    args: string
  ): Promise<PlayerDto> {
    return this.service.DeletePlayer(args);
  }

  @graphql.Query(() => PlayerDto)
  async GetPlayerProfile(
    @graphql.Args()
    args: string
  ): Promise<PlayerDto> {
    return this.service.GetPlayerProfile(args);
  }

  @graphql.Mutation(() => PlayerDto)
  async UpdatePlayer(
    @graphql.Args()
    args: PlayerDto
  ): Promise<PlayerDto> {
    return this.service.UpdatePlayer(args);
  }
}
