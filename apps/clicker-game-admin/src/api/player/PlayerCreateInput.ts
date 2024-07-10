import { ClubCreateNestedManyWithoutPlayersInput } from "./ClubCreateNestedManyWithoutPlayersInput";
import { FriendCreateNestedManyWithoutPlayersInput } from "./FriendCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  email?: string | null;
  password?: string | null;
  coins?: number | null;
  energyRechargeRate?: number | null;
  tapValue?: number | null;
  username?: string | null;
  energy?: number | null;
  clubs?: ClubCreateNestedManyWithoutPlayersInput;
  friends?: FriendCreateNestedManyWithoutPlayersInput;
};
