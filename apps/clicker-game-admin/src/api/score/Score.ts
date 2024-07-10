import { User } from "../user/User";

export type Score = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  scoreValue: number | null;
  earnedAt: Date | null;
  user?: User | null;
};
