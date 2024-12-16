export type Item = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemName: string | null;
  itemType?: "Option1" | null;
};
