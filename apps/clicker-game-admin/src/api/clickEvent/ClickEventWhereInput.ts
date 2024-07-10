import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClickEventWhereInput = {
  id?: StringFilter;
  clickCount?: IntNullableFilter;
  clickedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
