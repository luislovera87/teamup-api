export class Team {
    readonly name: string;
    readonly sport_id: string;
    readonly category_id: string;
    readonly players?: string[] = [];
    readonly is_active: boolean = true;
}
