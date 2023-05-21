export class Team {
    team_id: string;
    name: string;
    category_id: string;
    players?: string[] = [];
    is_active: boolean = true;
}
