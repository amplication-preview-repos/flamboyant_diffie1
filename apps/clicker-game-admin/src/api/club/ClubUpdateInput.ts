import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type ClubUpdateInput = {
  name?: string | null;
  description?: string | null;
  membershipCost?: number | null;
  boostRate?: number | null;
  player?: PlayerWhereUniqueInput | null;
};
