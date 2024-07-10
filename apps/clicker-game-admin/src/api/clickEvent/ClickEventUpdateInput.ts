import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClickEventUpdateInput = {
  clickCount?: number | null;
  clickedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
