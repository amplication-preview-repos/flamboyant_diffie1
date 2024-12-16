import { User } from "./base/User";
import { registerEnumType } from "@nestjs/graphql";

export enum UserRoles {
    Admin = "ADMIN",
    User = "USER"
}

registerEnumType(UserRoles, {
    name: "UserRoles",
  });