import { User } from "src/users/entities/user.entity";

export class CreateTeamDto {
    readonly name: string;
    readonly category_id: string;
    readonly participants?: string[] = [];
    readonly is_active: boolean = true;
}
