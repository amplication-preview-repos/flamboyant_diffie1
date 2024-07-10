import { SortOrder } from "../../util/SortOrder";

export type ClickEventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  clickCount?: SortOrder;
  clickedAt?: SortOrder;
  userId?: SortOrder;
};
