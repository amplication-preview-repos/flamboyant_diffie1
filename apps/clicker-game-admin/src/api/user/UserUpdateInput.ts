import { InputJsonValue } from "../../types";
import { ScoreUpdateManyWithoutUsersInput } from "./ScoreUpdateManyWithoutUsersInput";
import { ClickEventUpdateManyWithoutUsersInput } from "./ClickEventUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  totalClicks?: number | null;
  lastLogin?: Date | null;
  scores?: ScoreUpdateManyWithoutUsersInput;
  clickEvents?: ClickEventUpdateManyWithoutUsersInput;
  role?: "Option1" | null;
};
