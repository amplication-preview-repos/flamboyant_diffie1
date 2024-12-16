import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PlayerManagementService } from "./playermanagement.service";
import { PlayerDto } from "../playerManagement/PlayerDto";

@swagger.ApiTags("playerManagements")
@common.Controller("playerManagements")
export class PlayerManagementController {
  constructor(protected readonly service: PlayerManagementService) {}

  @common.Post("/authenticate")
  @swagger.ApiOkResponse({
    type: PlayerDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthenticatePlayer(
    @common.Body()
    body: PlayerDto
  ): Promise<PlayerDto> {
        return this.service.AuthenticatePlayer(body);
      }

  @common.Post("/create")
  @swagger.ApiOkResponse({
    type: PlayerDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePlayer(
    @common.Body()
    body: PlayerDto
  ): Promise<PlayerDto> {
        return this.service.CreatePlayer(body);
      }

  @common.Delete("/delete/:id")
  @swagger.ApiOkResponse({
    type: PlayerDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeletePlayer(
    @common.Body()
    body: PlayerDto
  ): Promise<PlayerDto> {
        return this.service.DeletePlayer(body);
      }

  @common.Get("/profile/:id")
  @swagger.ApiOkResponse({
    type: PlayerDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPlayerProfile(
    @common.Body()
    body: PlayerDto
  ): Promise<PlayerDto> {
        return this.service.GetPlayerProfile(body);
      }

  @common.Put("/update/:id")
  @swagger.ApiOkResponse({
    type: PlayerDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdatePlayer(
    @common.Body()
    body: PlayerDto
  ): Promise<PlayerDto> {
        return this.service.UpdatePlayer(body);
      }
}
