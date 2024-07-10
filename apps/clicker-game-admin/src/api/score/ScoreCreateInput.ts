import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScoreCreateInput = {
  scoreValue?: number | null;
  earnedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
