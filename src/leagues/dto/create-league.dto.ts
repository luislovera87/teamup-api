import { ApiProperty } from "@nestjs/swagger";
import { Location } from "src/shared/schemas/location.schema";

export class CreateLeagueDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly owners: string[] = [];

    @ApiProperty()
    readonly is_active: boolean = true;

    @ApiProperty()
    readonly sport_id: string;

    @ApiProperty()
    readonly teams: string[] = [];

    @ApiProperty()
    readonly locations: Location[] = [];

}
