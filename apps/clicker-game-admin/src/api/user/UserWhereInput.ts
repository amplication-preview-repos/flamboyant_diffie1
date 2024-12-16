import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";
import { ClickEventListRelationFilter } from "../clickEvent/ClickEventListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  totalClicks?: IntNullableFilter;
  lastLogin?: DateTimeNullableFilter;
  scores?: ScoreListRelationFilter;
  clickEvents?: ClickEventListRelationFilter;
  role?: "Option1";
};
