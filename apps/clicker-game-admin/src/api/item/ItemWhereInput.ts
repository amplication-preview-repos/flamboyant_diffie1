import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  itemName?: StringNullableFilter;
  itemType?: "Option1";
};
