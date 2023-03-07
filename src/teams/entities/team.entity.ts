import { User } from "src/users/entities/user.entity";

export class Team {
    team_id: string;
    name: string;
    category_id: string;
    players?: User[] = [];
    is_active: boolean = true;
}
