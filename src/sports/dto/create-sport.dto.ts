export class CreateSportDto {
    readonly name: string;
    readonly sport_id: string;
    readonly is_active: boolean = true;
}
