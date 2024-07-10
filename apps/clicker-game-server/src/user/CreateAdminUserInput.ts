import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { UserRoles } from "./UserRoles";

@ArgsType()
class CreateAdminUserInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    username!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    password!: string;

    @Field(() => UserRoles)
    @ApiProperty({
        required: true,
        enum: UserRoles
    })
    role!: "ADMIN" | "USER";
}

export { CreateAdminUserInput as CreateAdminUserInput };