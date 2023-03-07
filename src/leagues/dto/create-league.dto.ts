import { User } from "src/users/entities/user.entity";

export class CreateLeagueDto {
    readonly league_id: string;
    readonly name: string;
    readonly owners: User[] = [];
    readonly is_active: boolean = true;
}
