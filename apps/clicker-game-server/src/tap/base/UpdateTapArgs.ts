/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TapWhereUniqueInput } from "./TapWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TapUpdateInput } from "./TapUpdateInput";

@ArgsType()
class UpdateTapArgs {
  @ApiProperty({
    required: true,
    type: () => TapWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TapWhereUniqueInput)
  @Field(() => TapWhereUniqueInput, { nullable: false })
  where!: TapWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TapUpdateInput,
  })
  @ValidateNested()
  @Type(() => TapUpdateInput)
  @Field(() => TapUpdateInput, { nullable: false })
  data!: TapUpdateInput;
}

export { UpdateTapArgs as UpdateTapArgs };
