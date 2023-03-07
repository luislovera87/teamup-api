import { User } from "src/users/entities/user.entity";

export class CreateTeamDto {
    team_id: string;
    name: string;
    players?: User[] = [];
    is_active: boolean = true;
}
