import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const BoostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
