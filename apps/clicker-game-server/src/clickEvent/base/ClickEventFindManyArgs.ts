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
import { ClickEventWhereInput } from "./ClickEventWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClickEventOrderByInput } from "./ClickEventOrderByInput";

@ArgsType()
class ClickEventFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClickEventWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClickEventWhereInput, { nullable: true })
  @Type(() => ClickEventWhereInput)
  where?: ClickEventWhereInput;

  @ApiProperty({
    required: false,
    type: [ClickEventOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClickEventOrderByInput], { nullable: true })
  @Type(() => ClickEventOrderByInput)
  orderBy?: Array<ClickEventOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClickEventFindManyArgs as ClickEventFindManyArgs };