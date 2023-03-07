export class CreateTournamentDto {
    readonly tournament_id: string
    readonly name: string;
    readonly is_active: boolean = true;
}
