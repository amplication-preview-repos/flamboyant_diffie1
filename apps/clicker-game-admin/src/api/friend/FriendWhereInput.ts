import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type FriendWhereInput = {
  id?: StringFilter;
  earningsPercentage?: FloatNullableFilter;
  player?: PlayerWhereUniqueInput;
};
