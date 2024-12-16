import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClubTitle } from "../club/ClubTitle";
import { FriendTitle } from "../friend/FriendTitle";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="coins" source="coins" />
        <NumberInput label="energyRechargeRate" source="energyRechargeRate" />
        <NumberInput step={1} label="tapValue" source="tapValue" />
        <TextInput label="username" source="username" />
        <NumberInput step={1} label="energy" source="energy" />
        <ReferenceArrayInput
          source="clubs"
          reference="Club"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClubTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="friends"
          reference="Friend"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FriendTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
