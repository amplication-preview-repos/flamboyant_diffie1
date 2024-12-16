import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScoreWhereInput = {
  id?: StringFilter;
  scoreValue?: IntNullableFilter;
  earnedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
