import { Player } from "../player/Player";

export type Friend = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  earningsPercentage: number | null;
  player?: Player | null;
};
