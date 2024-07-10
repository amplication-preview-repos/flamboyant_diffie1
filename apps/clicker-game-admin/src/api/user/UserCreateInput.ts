import { InputJsonValue } from "../../types";
import { ScoreCreateNestedManyWithoutUsersInput } from "./ScoreCreateNestedManyWithoutUsersInput";
import { ClickEventCreateNestedManyWithoutUsersInput } from "./ClickEventCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  totalClicks?: number | null;
  lastLogin?: Date | null;
  scores?: ScoreCreateNestedManyWithoutUsersInput;
  clickEvents?: ClickEventCreateNestedManyWithoutUsersInput;
};
