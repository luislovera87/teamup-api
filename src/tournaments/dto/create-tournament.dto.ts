export class CreateTournamentDto {
    readonly name: string;
    readonly is_active: boolean = true;
    readonly categories: string[] = [];
}
