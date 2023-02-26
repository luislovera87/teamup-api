import { User } from "src/users/entities/user.entity";

export class League {
    league_id: string;
    name: string;
    owners: User[] = []
}
