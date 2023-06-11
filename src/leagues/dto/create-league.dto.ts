import { ApiProperty } from "@nestjs/swagger";
import { LocationDetail } from "src/shared/schemas/location-detail.schema";
import { Sport } from "src/sports/sport.schema";
import { Team } from "src/teams/team.schema";
import { User } from "src/users/user.schema";

export class CreateLeagueDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly owners: User[] = [];

    @ApiProperty()
    readonly is_active: boolean = true;

    @ApiProperty()
    readonly sport: Sport;

    @ApiProperty()
    readonly teams: Team[] = [];

    @ApiProperty()
    readonly locations: LocationDetail[] = [];

}
