import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const TapCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="tapCount" source="tapCount" />
        <NumberInput step={1} label="earnings" source="earnings" />
      </SimpleForm>
    </Create>
  );
};
