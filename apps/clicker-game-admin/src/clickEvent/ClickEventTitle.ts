import { ClickEvent as TClickEvent } from "../api/clickEvent/ClickEvent";

export const CLICKEVENT_TITLE_FIELD = "id";

export const ClickEventTitle = (record: TClickEvent): string => {
  return record.id?.toString() || String(record.id);
};
