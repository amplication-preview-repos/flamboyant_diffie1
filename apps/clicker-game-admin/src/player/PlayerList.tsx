import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PlayerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Players"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <TextField label="coins" source="coins" />
        <TextField label="energyRechargeRate" source="energyRechargeRate" />
        <TextField label="tapValue" source="tapValue" />
        <TextField label="username" source="username" />
        <TextField label="energy" source="energy" />
      </Datagrid>
    </List>
  );
};