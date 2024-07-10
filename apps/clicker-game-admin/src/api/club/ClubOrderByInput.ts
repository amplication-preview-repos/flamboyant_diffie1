import { SortOrder } from "../../util/SortOrder";

export type ClubOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  membershipCost?: SortOrder;
  boostRate?: SortOrder;
  playerId?: SortOrder;
};
