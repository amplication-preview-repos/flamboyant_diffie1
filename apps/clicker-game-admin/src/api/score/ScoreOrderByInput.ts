import { SortOrder } from "../../util/SortOrder";

export type ScoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  scoreValue?: SortOrder;
  earnedAt?: SortOrder;
  userId?: SortOrder;
};
