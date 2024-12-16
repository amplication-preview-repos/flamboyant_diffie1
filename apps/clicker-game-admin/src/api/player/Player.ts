import { Club } from "../club/Club";
import { Friend } from "../friend/Friend";

export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  password: string | null;
  coins: number | null;
  energyRechargeRate: number | null;
  tapValue: number | null;
  username: string | null;
  energy: number | null;
  clubs?: Array<Club>;
  friends?: Array<Friend>;
};
