import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type FriendUpdateInput = {
  earningsPercentage?: number | null;
  player?: PlayerWhereUniqueInput | null;
};
