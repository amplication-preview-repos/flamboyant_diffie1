import { Boost as TBoost } from "../api/boost/Boost";

export const BOOST_TITLE_FIELD = "name";

export const BoostTitle = (record: TBoost): string => {
  return record.name?.toString() || String(record.id);
};
