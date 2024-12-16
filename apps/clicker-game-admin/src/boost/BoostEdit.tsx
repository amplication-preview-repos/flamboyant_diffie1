import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BoostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="boostMultiplier" source="boostMultiplier" />
        <NumberInput
          step={1}
          label="durationSeconds"
          source="durationSeconds"
        />
      </SimpleForm>
    </Edit>
  );
};
