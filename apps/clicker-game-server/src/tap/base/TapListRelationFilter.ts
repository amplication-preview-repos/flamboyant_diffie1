/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TapWhereInput } from "./TapWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TapListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TapWhereInput,
  })
  @ValidateNested()
  @Type(() => TapWhereInput)
  @IsOptional()
  @Field(() => TapWhereInput, {
    nullable: true,
  })
  every?: TapWhereInput;

  @ApiProperty({
    required: false,
    type: () => TapWhereInput,
  })
  @ValidateNested()
  @Type(() => TapWhereInput)
  @IsOptional()
  @Field(() => TapWhereInput, {
    nullable: true,
  })
  some?: TapWhereInput;

  @ApiProperty({
    required: false,
    type: () => TapWhereInput,
  })
  @ValidateNested()
  @Type(() => TapWhereInput)
  @IsOptional()
  @Field(() => TapWhereInput, {
    nullable: true,
  })
  none?: TapWhereInput;
}
export { TapListRelationFilter as TapListRelationFilter };
