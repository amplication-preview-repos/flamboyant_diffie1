import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TapWhereInput = {
  id?: StringFilter;
  tapCount?: IntNullableFilter;
  earnings?: IntNullableFilter;
};
