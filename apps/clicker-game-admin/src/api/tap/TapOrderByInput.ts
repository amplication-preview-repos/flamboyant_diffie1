import { SortOrder } from "../../util/SortOrder";

export type TapOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tapCount?: SortOrder;
  earnings?: SortOrder;
};
