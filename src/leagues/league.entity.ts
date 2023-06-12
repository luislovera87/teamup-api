import { LocationDetail } from "src/shared/schemas/location-detail.schema";
import { Sport } from "src/sports/sport.schema";
import { Team } from "src/teams/team.schema";
import { User } from "src/users/user.schema";

export class League {
    readonly name: string;
    readonly owners: User[] = [];
    readonly is_active: boolean = true;
    readonly sport: Sport;
    readonly teams: Team[] = [];
    readonly locations: LocationDetail[] = []
}
