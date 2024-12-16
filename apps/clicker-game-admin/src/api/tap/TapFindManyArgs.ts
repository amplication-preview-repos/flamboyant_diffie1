import { TapWhereInput } from "./TapWhereInput";
import { TapOrderByInput } from "./TapOrderByInput";

export type TapFindManyArgs = {
  where?: TapWhereInput;
  orderBy?: Array<TapOrderByInput>;
  skip?: number;
  take?: number;
};
