import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClickEventCreateInput = {
  clickCount?: number | null;
  clickedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
