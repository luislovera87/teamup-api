import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { Location, LocationSchema } from "src/shared/schemas/location.schema";

@ApiExtraModels(Location)
export class CreateUserDto {

    @ApiProperty()
    readonly first_name: string;

    @ApiProperty()
    readonly last_name: string;

    @ApiProperty()
    readonly dob: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly preferred_name?: string;

    @ApiProperty()
    readonly phone_number?: string;

    @ApiProperty()
    readonly is_active?: boolean = true;

    @ApiProperty()
    readonly is_owner?: boolean = false;

    @ApiProperty()
    readonly location?: Location
}
