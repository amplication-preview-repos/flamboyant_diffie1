import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const TapEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="tapCount" source="tapCount" />
        <NumberInput step={1} label="earnings" source="earnings" />
      </SimpleForm>
    </Edit>
  );
};
