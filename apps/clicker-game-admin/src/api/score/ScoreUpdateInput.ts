import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScoreUpdateInput = {
  scoreValue?: number | null;
  earnedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
