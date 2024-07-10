import { Injectable } from "@nestjs/common";
import { PlayerLoginInput } from "../playerManagement/PlayerLoginInput";
import { PlayerDto } from "../playerManagement/PlayerDto";

@Injectable()
export class PlayerManagementService {
  constructor() {}
  async AuthenticatePlayer(args: PlayerLoginInput): Promise<PlayerDto> {
    throw new Error("Not implemented");
  }
  async CreatePlayer(args: PlayerLoginInput): Promise<PlayerDto> {
    throw new Error("Not implemented");
  }
  async DeletePlayer(args: string): Promise<PlayerDto> {
    throw new Error("Not implemented");
  }
  async GetPlayerProfile(args: string): Promise<PlayerDto> {
    throw new Error("Not implemented");
  }
  async UpdatePlayer(args: PlayerDto): Promise<PlayerDto> {
    throw new Error("Not implemented");
  }
}
