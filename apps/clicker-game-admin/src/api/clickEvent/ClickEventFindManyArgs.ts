import { ClickEventWhereInput } from "./ClickEventWhereInput";
import { ClickEventOrderByInput } from "./ClickEventOrderByInput";

export type ClickEventFindManyArgs = {
  where?: ClickEventWhereInput;
  orderBy?: Array<ClickEventOrderByInput>;
  skip?: number;
  take?: number;
};
