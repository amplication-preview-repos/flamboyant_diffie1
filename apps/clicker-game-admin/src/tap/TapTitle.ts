import { Tap as TTap } from "../api/tap/Tap";

export const TAP_TITLE_FIELD = "id";

export const TapTitle = (record: TTap): string => {
  return record.id?.toString() || String(record.id);
};
