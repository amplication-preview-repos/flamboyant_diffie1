import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  coins?: SortOrder;
  energyRechargeRate?: SortOrder;
  tapValue?: SortOrder;
  username?: SortOrder;
  energy?: SortOrder;
};
