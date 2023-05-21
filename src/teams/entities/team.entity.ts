export class Team {
    team_id: string;
    name: string;
    category_id: string;
    participants?: string[] = [];
    is_active: boolean = true;
}
