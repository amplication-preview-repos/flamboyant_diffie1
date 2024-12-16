import { Player } from "../player/Player";

export type Club = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  membershipCost: number | null;
  boostRate: number | null;
  player?: Player | null;
};
