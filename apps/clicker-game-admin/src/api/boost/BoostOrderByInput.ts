import { SortOrder } from "../../util/SortOrder";

export type BoostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  boostMultiplier?: SortOrder;
  durationSeconds?: SortOrder;
};
