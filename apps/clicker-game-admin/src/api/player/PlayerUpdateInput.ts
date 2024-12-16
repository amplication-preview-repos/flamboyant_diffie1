import { ClubUpdateManyWithoutPlayersInput } from "./ClubUpdateManyWithoutPlayersInput";
import { FriendUpdateManyWithoutPlayersInput } from "./FriendUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  email?: string | null;
  password?: string | null;
  coins?: number | null;
  energyRechargeRate?: number | null;
  tapValue?: number | null;
  username?: string | null;
  energy?: number | null;
  clubs?: ClubUpdateManyWithoutPlayersInput;
  friends?: FriendUpdateManyWithoutPlayersInput;
};
