import { JsonValue } from "type-fest";
import { Score } from "../score/Score";
import { ClickEvent } from "../clickEvent/ClickEvent";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  totalClicks: number | null;
  lastLogin: Date | null;
  scores?: Array<Score>;
  clickEvents?: Array<ClickEvent>;
};
