import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type FriendCreateInput = {
  earningsPercentage?: number | null;
  player?: PlayerWhereUniqueInput | null;
};
