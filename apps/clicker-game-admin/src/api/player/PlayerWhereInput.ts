import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ClubListRelationFilter } from "../club/ClubListRelationFilter";
import { FriendListRelationFilter } from "../friend/FriendListRelationFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  coins?: IntNullableFilter;
  energyRechargeRate?: FloatNullableFilter;
  tapValue?: IntNullableFilter;
  username?: StringNullableFilter;
  energy?: IntNullableFilter;
  clubs?: ClubListRelationFilter;
  friends?: FriendListRelationFilter;
};
