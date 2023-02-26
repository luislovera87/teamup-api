import { User } from "src/users/entities/user.entity";

export class CreateLeagueDto {
    league_id: string;
    name: string;
    owners: User[] = [];
    is_active: boolean = true;
}
