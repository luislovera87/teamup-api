import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { LocationDetail } from "src/shared/schemas/location-detail.schema";

// @ApiExtraModels(LocationDetail)
export class CreateUserDto {

    @IsNotEmpty()
    @ApiProperty()
    readonly first_name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly last_name: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly dob: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly preferred_name?: string;

    @IsPhoneNumber('US')
    @ApiProperty()
    readonly phone_number?: string;

    @ApiProperty()
    readonly is_active?: boolean = true;

    @ApiProperty()
    readonly is_owner?: boolean = false;

    @ApiProperty()
    readonly location?: LocationDetail
}
