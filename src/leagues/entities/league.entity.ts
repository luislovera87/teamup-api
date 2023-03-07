import { User } from "src/users/entities/user.entity";

export class League {
    readonly league_id: string;
    readonly name: string;
    readonly owners: User[] = []
}
