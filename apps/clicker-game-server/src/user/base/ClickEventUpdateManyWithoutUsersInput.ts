/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClickEventWhereUniqueInput } from "../../clickEvent/base/ClickEventWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ClickEventUpdateManyWithoutUsersInput {
  @Field(() => [ClickEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClickEventWhereUniqueInput],
  })
  connect?: Array<ClickEventWhereUniqueInput>;

  @Field(() => [ClickEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClickEventWhereUniqueInput],
  })
  disconnect?: Array<ClickEventWhereUniqueInput>;

  @Field(() => [ClickEventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClickEventWhereUniqueInput],
  })
  set?: Array<ClickEventWhereUniqueInput>;
}

export { ClickEventUpdateManyWithoutUsersInput as ClickEventUpdateManyWithoutUsersInput };
