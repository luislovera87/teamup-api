export class League {
    readonly name: string;
    readonly owners: string[] = [];
    readonly is_active: boolean = true;
    readonly sport_id: string;
    readonly teams: string[] = [];
}
