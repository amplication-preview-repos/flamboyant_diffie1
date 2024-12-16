export type Boost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  boostMultiplier: number | null;
  durationSeconds: number | null;
};
