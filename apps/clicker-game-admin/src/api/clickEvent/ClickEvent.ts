import { User } from "../user/User";

export type ClickEvent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clickCount: number | null;
  clickedAt: Date | null;
  user?: User | null;
};
